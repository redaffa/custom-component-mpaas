Component({
  mixins: [],
  data: {
    modalVisible:true,
    popupAnimationClass:'close'
  },
  props: {},
  didMount() {
    this.toogleOnTap()
  },
  didUpdate() {
    this.toogleOnTap()
  },
  didUnmount() {},
  methods: {
    toogleOnTap(){
      if(this.props.modalVisible){
        this.setData({
          modalVisible:true,
          popupAnimationClass:"open"
        })
      }else{
        this.setData({
          modalVisible:false,
          popupAnimationClass:"close"
        })
      }
    }
  },
});
