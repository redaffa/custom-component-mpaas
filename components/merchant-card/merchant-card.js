Component({
  mixins: [],
  data: {},
  props: {
   
  },
  didMount() {
    console.log(this.props)
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap(e){
      this.props.onTap()
    }
  }
});
