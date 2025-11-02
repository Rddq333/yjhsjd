// ipImage.ts - IP形象页面逻辑
// 功能：展示红色文化IP形象、应用场景、周边产品

Component({
  data: {
    // IP形象主展示区图片（轮播用）
    ipMainImages: [
      '/images/ip-main.png',
      '/images/ip-main2.png'
    ],

    // IP形象图片列表
    ipImages: [
      '/images/ip-1.png',
      '/images/ip-2.png',
      '/images/ip-3.png',
      '/images/ip-4.png'
    ],

    // IP形象名称列表
    itemNames: [
      '标准形象',
      '敬礼形象',
      '挥手形象',
      '奔跑形象'
    ],

    // 应用场景
    scenes: [
      {
        title: '宣传海报',
        desc: '用于红色文化宣传和教育活动',
        image: '',
        icon: '📋',
        hasImage: false
      },
      {
        title: '文创产品',
        desc: '印在各类文创产品上，传播红色文化',
        image: '',
        icon: '🎁',
        hasImage: false
      },
      {
        title: '数字媒体',
        desc: '在各类数字平台上展示和互动',
        image: '',
        icon: '📱',
        hasImage: false
      },
      {
        title: '主题活动',
        desc: '作为主题活动的主视觉形象',
        image: '',
        icon: '🎪',
        hasImage: false
      }
    ],

    // IP周边产品
    ipProducts: [
      {
        name: 'IP玩偶',
        image: '',
        icon: '🧸',
        hasImage: false
      },
      {
        name: 'IP徽章',
        image: '',
        icon: '🏅',
        hasImage: false
      },
      {
        name: 'IP贴纸',
        image: '',
        icon: '🏷️',
        hasImage: false
      },
      {
        name: 'IP明信片',
        image: '',
        icon: '💌',
        hasImage: false
      }
    ]
  },

  methods: {
    // 查看图片详情
    viewImageDetail(e: any) {
      const index = e.currentTarget.dataset.index
      const urls = this.data.ipImages
      
      wx.previewImage({
        current: urls[index],
        urls: urls
      })
    },

    // 查看IP周边产品
    viewIPProduct(e: any) {
      const index = e.currentTarget.dataset.index
      const product = this.data.ipProducts[index]
      
      wx.showModal({
        title: product.name,
        content: '跳转到文创产品页面查看详情',
        success: (res) => {
          if (res.confirm) {
            // 跳转到文创产品页面
            wx.switchTab({
              url: '/pages/cultureProducts/cultureProducts'
            })
          }
        }
      })
    }
  }
})

