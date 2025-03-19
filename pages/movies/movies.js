import {getMovies} from "../../api/movies"

/**
 * Página de listado de películas.
 *
 * @page
 */

Page({
  data: {
    movies:[],
    searchQuery:"",
    filtrarMovies:[],
    
  },
  onLoad() {
    this.fetchMovies()
    
  },
  /**
   * Obtiene la lista de películas desde la API.
   */
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
  /**
   * Filtra las películas según la consulta ingresada en el buscador.
   * 
   * @param {string} query - Texto ingresado por el usuario.
   */

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
   /**
   * Navega a la página de favoritos.
   */
  
  onVerFavoritos() {
    // Navegar a la página de favoritos
    my.navigateTo({
      url: "/pages/favoritos/favoritos"
    });
  }
  

});
