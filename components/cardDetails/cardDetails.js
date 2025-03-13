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