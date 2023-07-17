Page({
  data: {
    popUpVisible:false
  },
  onLoad() {},
  ontestOnTap(e){
    console.log(e)
  },
  popUpHandler(e){
    console.log(e)
    if(this.data.popUpVisible){
      this.setData({
        popUpVisible:false
      })
    }else{
      this.setData({
        popUpVisible:true
      })
    }
    
  },
  handlePopUpClose(){
    this.setData({
      popUpVisible:false
    })
  }
});
