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
