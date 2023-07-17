App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    const systemInfo = my.getSystemInfoSync()
    console.log(systemInfo)
    this.globalData.safeAreaView = systemInfo.titleBarHeight + systemInfo.statusBarHeight
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  globalData:{
    safeAreaView:""
  }
});
