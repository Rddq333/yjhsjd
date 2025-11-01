// localIntro.ts - 本地介绍页面逻辑
// 功能：展示永嘉红色文化、历史、地标、交通等信息

Component({
  data: {
    // 历史条目
    historyItems: [
      {
        title: "革命历史",
        content: "永嘉是中国工农红军第十三军的重要活动区域，这里留下了众多革命历史遗迹...",
        image: "/images/history-intro1.jpg"
      },
      {
        title: "文化传承",
        content: "永嘉地区有着深厚的红色文化传统，一代代传承着革命精神...",
        image: "/images/history-intro2.jpg"
      },
      {
        title: "教育基地",
        content: "红十三军基地是重要的爱国主义教育基地，每年接待众多参观学习者...",
        image: "/images/history-intro3.jpg"
      }
    ],

    // 红色地标
    landmarks: [
      {
        name: "红十三军纪念馆",
        desc: "全面展示红十三军革命历史的专题纪念馆",
        image: "/images/landmark1.jpg"
      },
      {
        name: "革命英雄纪念碑",
        desc: "纪念为革命事业献身的英雄先烈",
        image: "/images/landmark2.jpg"
      },
      {
        name: "革命遗址",
        desc: "保存完好的革命历史遗址",
        image: "/images/landmark3.jpg"
      },
      {
        name: "文化广场",
        desc: "开展红色文化活动的中心广场",
        image: "/images/landmark4.jpg"
      }
    ]
  },

  methods: {
    // 拨打电话
    makePhoneCall() {
      wx.makePhoneCall({
        phoneNumber: '0577-XXXX-XXXX',
        fail: () => {
          wx.showToast({
            title: '请配置正确的电话号码',
            icon: 'none'
          })
        }
      })
    },

    // 打开地图
    openMap() {
      // 使用微信地图API打开位置
      wx.openLocation({
        latitude: 28.15, // 永嘉县大致纬度，请根据实际情况修改
        longitude: 120.68, // 永嘉县大致经度，请根据实际情况修改
        name: '永嘉红十三军基地',
        address: '浙江省温州市永嘉县',
        fail: () => {
          wx.showToast({
            title: '请配置正确的经纬度',
            icon: 'none'
          })
        }
      })
    }
  }
})

