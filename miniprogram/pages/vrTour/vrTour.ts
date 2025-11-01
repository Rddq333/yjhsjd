// vrTour.ts - VR云游页面逻辑
// 功能：VR全景浏览链接、场景切换

Component({
  data: {
    // VR场景列表
    vrList: [
      {
        title: "红十三军纪念馆",
        desc: "全面了解红十三军的历史与发展",
        image: "/images/vr-scene1.jpg",
        url: "https://example.com/vr/scene1" // VR全景链接
      },
      {
        title: "革命遗址",
        desc: "实地参观革命历史遗址",
        image: "/images/vr-scene2.jpg",
        url: "https://example.com/vr/scene2"
      },
      {
        title: "英雄广场",
        desc: "瞻仰英雄纪念碑",
        image: "/images/vr-scene3.jpg",
        url: "https://example.com/vr/scene3"
      },
      {
        title: "文化展厅",
        desc: "浏览红色文化展品",
        image: "/images/vr-scene4.jpg",
        url: "https://example.com/vr/scene4"
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

