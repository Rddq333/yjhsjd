// index.ts - 首页逻辑
// 功能：提供五大功能模块的导航入口
const app = getApp<IAppOption>()

Component({
  data: {
    // 页面数据
  },

  methods: {
    // 跳转到本地介绍页面
    navigateToLocalIntro() {
      wx.navigateTo({
        url: '/pages/localIntro/localIntro'
      })
    },

    // 跳转到IP形象页面
    navigateToIPImage() {
      wx.navigateTo({
        url: '/pages/ipImage/ipImage'
      })
    }
  }
})
