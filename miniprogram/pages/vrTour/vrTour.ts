// vrTour.ts - VR云游页面逻辑
// 功能：VR全景浏览链接、场景切换

Component({
  data: {
    // VR场景列表
    vrList: [
      {
        title: "永嘉红十三军军部旧址",
        desc: "全面了解红十三军的历史与发展",
        image: "/images/vr-scene1.jpg",
        url: "https://www.720yun.com/t/39vkOwdmr7m?scene_id=54602433" // VR全景链接
      }
    ]
  },

  methods: {
    // 打开VR场景
    openVRScene(e: any) {
      const { url, title } = e.currentTarget.dataset
      
      // 使用web-view打开VR全景链接
      wx.showModal({
        title: '进入VR场景',
        content: `是否进入"${title}"的VR全景？`,
        success: (res) => {
          if (res.confirm) {
            // 跳转到web-view页面显示VR内容
            wx.navigateTo({
              url: `/pages/vrViewer/vrViewer?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
            })
            
            // 或者直接使用web-view组件
            // 注意：需要在pages/vrViewer/vrViewer页面中配置web-view
          }
        }
      })
    },

    // 快速体验VR
    quickStartVR() {
      if (this.data.vrList.length > 0) {
        this.openVRScene({
          currentTarget: {
            dataset: {
              url: this.data.vrList[0].url,
              title: this.data.vrList[0].title
            }
          }
        })
      }
    }
  }
})

