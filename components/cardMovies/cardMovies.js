Component({
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
