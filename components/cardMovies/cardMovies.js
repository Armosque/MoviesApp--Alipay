
/**
 * Componente para mostrar una película en la lista.
 * Permite navegar a los detalles de la película seleccionada.
 * 
 * @component
 */


  /**
   * Datos del componente.
   * @property {Object} data - Datos internos del componente (actualmente vacío).
   */

  /**
   * Propiedades recibidas por el componente.
   * @property {Object} movie - Objeto con la información de la película.
   */Component({
  mixins: [],
  data: {},
  props: {
    movie: Object

  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    goToDetails(){
      const movieId = this.props.movie.id
      console.log("movieID:", movieId)
      my.navigateTo({
        url: `/pages/movieDetails/movieDetails?id=${movieId}`
      })
    }
  },
});
