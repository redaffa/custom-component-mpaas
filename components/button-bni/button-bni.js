import getSize from "../util/getClass";

Component({
  mixins: [],
  data: {
    size:"",
    disabled: "",
    classStyle:""
  },
  props: {},
  didMount() {
    this.setData({
      size: getSize(this.props.size),
      disabled: this.props.disabled ? "bni-button-disabled" : "",
      type: this.getType(this.props.type)
    })
    this.setData({
      classStyle: `${this.data.size} ${this.data.disabled} ${this.data.type}`
    })
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    onTap(e){
      this.props.onTap(e)
    },

    getType(){
      const type = this.props.type
      switch (type) {
        case "primary":
          return "bni-button-primary"
        case "default":
          return "bni-button-default"
        default:
          return "bni-button-default"
  
      }
    }
  },
});
