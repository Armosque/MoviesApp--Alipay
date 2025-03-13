import {getMovies} from "../../api/movies"

Page({
  data: {
    movies:[],
    searchQuery:"",
    filtrarMovies:[],
    
  },
  onLoad() {
    this.fetchMovies()
    
  },
  async fetchMovies(){

    try {
      const moviesEstreno = await getMovies();
      console.log("Desde movies", moviesEstreno.results)
  
      this.setData({
        movies: moviesEstreno.results, 
        filtrarMovies:moviesEstreno.results
      })
      
    } catch (error) {
      console.log("Error:", error)
      
    }
  },
  onSearchInput(query){
    
    console.log("has ingresado", query)

    if (query === "") {
      this.setData({
        movies: this.data.filtrarMovies,
        searchQuery: query
      });
      return;
    }
    const moviesFiltradas = this.data.movies.filter(movie=>
      movie.title.toLowerCase().includes(query.toLowerCase())
      )
    console.log("los resultados son:", moviesFiltradas)
    

    if (moviesFiltradas.length === 0){
      my.showToast({ content: "Lo siento. No tenemos esa Pelicula ", type: "success" });
    }

    this.setData({
      movies: moviesFiltradas, 
      searchQuery:query})
  
  },
  onVerFavoritos() {
    // Navegar a la página de favoritos
    my.navigateTo({
      url: "/pages/favoritos/favoritos"
    });
  }
  

});
