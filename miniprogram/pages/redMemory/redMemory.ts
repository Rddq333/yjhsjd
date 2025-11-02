// redMemory.ts - 红色记忆页面逻辑
// 功能：展示红色历史内容、英雄人物、虚拟讲解

Component({
  data: {
    // 历史时间线数据
    historyList: [
      {
        year: "1930年",
        title: "红十三军成立",
        desc: "中国工农红军第十三军成立，是浙南地区第一支正规红军队伍...",
        image: "/images/history1.jpg"
      },
      {
        year: "1931年",
        title: "革命斗争",
        desc: "红十三军在永嘉地区开展革命斗争，建立红色根据地...",
        image: "/images/history2.jpg"
      },
      {
        year: "1932年",
        title: "战略转移",
        desc: "面对敌军围剿，红十三军进行战略转移...",
        image: "/images/history3.jpg"
      }
    ],

    // 英雄人物数据
    heroList: [
      {
        name: "胡公冕",
        title: "红十三军军长",
        desc: "中国工农红军第十三军的主要创建者和领导人...",
        avatar: "/images/hero1.jpg",
        qrCode: "/images/qr-hero1.jpg"
      },
      {
        name: "金贯真",
        title: "红十三军政委",
        desc: "红十三军的重要领导人之一...",
        avatar: "/images/hero2.jpg",
        qrCode: "/images/qr-hero2.jpg"
      },
      {
        name: "陈文杰",
        title: "红十三军政治部主任",
        desc: "为红十三军的组织建设做出重要贡献...",
        avatar: "/images/hero3.jpg",
        qrCode: "/images/qr-hero3.jpg"
      },
      {
        name: "雷高升",
        title: "红十三军重要领导人",
        desc: "红十三军的重要领导人之一，为革命事业做出了重要贡献...",
        avatar: "/images/hero4.jpg",
        qrCode: "/images/qr-hero4.jpg"
      }
    ]
  },

  methods: {
    // 查看英雄详情
    viewHeroDetail(e: any) {
      const index = e.currentTarget.dataset.index
      const hero = this.data.heroList[index]
      
      // 跳转到英雄详情页面，传递英雄信息
      wx.navigateTo({
        url: `/pages/heroDetail/heroDetail?name=${encodeURIComponent(hero.name)}&title=${encodeURIComponent(hero.title)}&desc=${encodeURIComponent(hero.desc)}&avatar=${hero.avatar}&qrCode=${hero.qrCode || '/images/qr-placeholder.jpg'}`
      })
    },

    // 启动虚拟讲解
    startVirtualGuide() {
      wx.showToast({
        title: '虚拟讲解功能开发中',
        icon: 'none'
      })
      
      // TODO: 实现虚拟讲解功能
      // 可以调用语音合成API或播放音频文件
    }
  }
})

