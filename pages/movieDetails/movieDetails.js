import { getMovieDetails } from "../../api/movie_Details";

Page({
  data: {
    movie:Object,
    movieId:null,
    favoritos:[],
    showFavoritos:false,
    isFavorito: false

  },
  onLoad(query) {
    console.log("Query recibido:", query)

    if (query  && query.id){
      const movieId = query.id
      console.log("QueryID", movieId)
      this.setData([movieId])
      this.fetchMovieDetails(movieId)

    } else if (query && query.showFavoritos){
      this.loadFavoritos()
      this.setData({showFavoritos:true})
    }
    
  },
  async fetchMovieDetails(id){
    try {
      const movieDetails = await getMovieDetails(id)
      console.log("Obteniendo info", movieDetails)
      this.setData({movie:movieDetails})

      // Verificar si la película ya está en favoritos
      this.updateFavoritosState(movieDetails)
    } catch (error) {
      console.log("Error:", error)
      
    }
    
  },
  updateFavoritosState(movie) {
    const favoritos = my.getStorageSync({ key: "favoritos" }).data || [];
    const isFavorito = favoritos.some((fav) => fav.id === movie.id);
    this.setData({ isFavorito, favoritos });
  },
    // Manejar el evento de agregar/quitar favoritos

  handleToggleFavorito() {
      const { movie, favoritos, isFavorito } = this.data;
  
      let newFavoritos = [...favoritos];
      if (isFavorito) {
        // Quitar de favoritos
        newFavoritos = newFavoritos.filter((fav) => fav.id !== movie.id);
        this.setData({ favoritos: newFavoritos })
        
        my.showToast({ content: "Película Eliminada", type: "success" });
      } else {
        // Agregar a favoritos
        newFavoritos.push(movie);
        my.showToast({ content: "Película Agregada", type: "success" });
      }
  
      // Guardar en almacenamiento y actualizar estado
      my.setStorageSync({ key: "favoritos", data: newFavoritos });
      this.setData({ favoritos: newFavoritos, isFavorito: !isFavorito });
  
      // Si estás en la página de favoritos, actualiza la lista
      if (this.data.showFavoritos) {
        this.loadFavoritos(); // Recargar la lista de favoritos
      }
    },

    // Cargar favoritos desde el almacenamiento local
    loadFavoritos() {
      const favoritos = my.getStorageSync({ key: 'favoritos' }).data || [];
      console.log(favoritos)
      this.setData({ favoritos: newFavoritos });
   
   },


});
