Page({
  data: {
    safeAreaView:"",
    filterListArray:[
      {
        name:"Promo Liburan",
        icon:"StarOutline"
      },
      {
        name:"Top Choice",
        icon:"HeartOutline"
      },
      {
        name:"Almost Sold Out",
        icon:"FireFill"
      },
      {
        name:"All"
      },
      {
        name:"Food & Beverage"
      },
      {
        name:"Shopping"
      },
      {
        name:"Travel & Entertainment"
      },
      {
        name:"Gaming"
      },
      {
        name:"Health & Beauty"
      },
      {
        name:"Others"
      }
    ],
    selectedFilter:"Gaming",
    "padding":""
  },
  onLoad() {
    my.setNavigationBar({
      backgroundColor:"#004EB2"
    })
    const systemInfo = my.getSystemInfoSync()
    console.log(systemInfo)
    this.setData({
      padding:systemInfo.statusBarHeight
    })
    this.setData({
      safeAreaView: getApp().globalData.safeAreaView
    })
  },
  ontestOnTap(e){
    console.log(e)
    console.log("test masuk")
  },
  changeFilter(e){
    const {filter} = e.target.dataset
    this.setData({
      selectedFilter:filter
    })
  }
});
