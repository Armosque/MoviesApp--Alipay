/**
 * Componente de barra de búsqueda para filtrar películas.
 * 
 * @component
 */

  /**
   * Datos internos del componente (actualmente vacío).
   * @property {Object} data
   */

  /**
   * Propiedades recibidas por el componente.
   * @property {string} searchQuery - Texto ingresado en la barra de búsqueda.
   * @property {Function} onSearchInput - Función que maneja el evento de búsqueda.
   */
  
Component({
  mixins: [],
  data: {},
  props: {
    searchQuery:String,
    onSearchInput: Function
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onInput(e){
      const query = e.detail.value
      console.log(query)
      this.props.onSearchInput(query)
    }
  },
});
