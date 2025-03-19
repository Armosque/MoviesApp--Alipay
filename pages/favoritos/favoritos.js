/**
 * Página de favoritos donde se gestionan las películas marcadas como favoritas.
 * 
 * @page
 */

  /**
   * Datos del estado de la página.
   * @property {Array} favoritos - Lista de películas favoritas almacenadas.
   * @property {Array} newFavoritos - Nueva lista de películas tras eliminar una.
   */

Page({
  data: {
    favoritos: [],
    newFavoritos:[] // Lista de películas favoritas
  },
  onLoad() {
    this.loadFavoritos(); // Cargar favoritos al iniciar la página
  },
  onShow(){
    this.loadFavoritos();
  },
  loadFavoritos() {
    const favoritos = my.getStorageSync({ key: "favoritos" }).data || [];
    console.log("Favoritos cargados:", favoritos);
    this.setData({ favoritos }); // Actualizar el estado con los favoritos
  },
  eliminarFavorito(event) {
    const id = event.currentTarget.dataset.id; // Obtener ID de la película
    let newFavoritos = this.data.favoritos.filter(movie => movie.id !== id);

    // Actualizar almacenamiento local
    my.setStorageSync({
      key: "favoritos",
      data: newFavoritos
    });

    // Actualizar la UI
    this.setData({ favoritos: newFavoritos });

    console.log(`Película con ID ${id} eliminada.`, newFavoritos);
  },

  goToHome(){
    my.navigateTo({
      url:"/pages/movies/movies"
    })
  }
 
});