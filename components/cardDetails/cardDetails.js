/**
 * Componente de detalles de una película.
 * 
 * @component
 */

  /**
   * Propiedades del componente.
   * @property {Object} movie - Objeto con la información de la película.
   * @property {Function} onToggleFavorito - Función para alternar la película en favoritos.
   * @property {boolean} isFavorito - Indica si la película está en favoritos.
   */

Component({
  props: { 
    movie: Object,
    onToggleFavorito:Function,
    isFavorito:false
  },
 
  didMount() {
    console.log("Componente card-details montado");
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    toggleFavorito(e){
      
      console.log("Cambiando favorito para:", this.props.movie);
      this.props.onToggleFavorito(this.props.movie);
    }
    
  },
});