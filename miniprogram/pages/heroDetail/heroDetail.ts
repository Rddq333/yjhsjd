// heroDetail.ts - 英雄详情页面逻辑
// 功能：显示英雄信息和视频二维码

Page({
  data: {
    heroName: '',
    heroTitle: '',
    heroDesc: '',
    heroAvatar: '',
    qrCodeImage: ''
  },

  onLoad(options: any) {
    // 从路由参数获取英雄信息
    const { name, title, desc, avatar, qrCode } = options
    
    this.setData({
      heroName: decodeURIComponent(name || ''),
      heroTitle: decodeURIComponent(title || ''),
      heroDesc: decodeURIComponent(desc || ''),
      heroAvatar: avatar || '',
      qrCodeImage: qrCode || '/images/qr-placeholder.jpg' // 默认占位图
    })
  },

  // 从图片识别二维码
  recognizeQRCodeFromImage() {
    wx.showModal({
      title: '识别二维码',
      content: '请点击右上角菜单，选择"识别图片中的二维码"，或者使用下面的"从相册选择识别"功能',
      showCancel: false,
      confirmText: '知道了'
    })
  },

  // 打开相机扫码
  scanQRCode() {
    wx.scanCode({
      success: (res) => {
        this.handleScanResult(res.result)
      },
      fail: (err) => {
        wx.showToast({
          title: '扫码失败，请重试',
          icon: 'none'
        })
      }
    })
  },

  // 从相册选择图片识别二维码
  scanQRCodeFromAlbum() {
    wx.scanCode({
      sourceType: ['album'], // 从相册选择
      success: (res) => {
        this.handleScanResult(res.result)
      },
      fail: (err) => {
        wx.showToast({
          title: '扫码失败，请重试',
          icon: 'none'
        })
      }
    })
  },

  // 处理扫码结果
  handleScanResult(result: string) {
    if (!result) {
      wx.showToast({
        title: '未识别到内容',
        icon: 'none'
      })
      return
    }

    // 如果是视频链接
    if (result.startsWith('http://') || result.startsWith('https://')) {
      // 判断是否是视频平台链接
      const videoPlatforms = ['bilibili.com', 'youku.com', 'iqiyi.com', 'qq.com', 'youtube.com', 'douyin.com', 'kuaishou.com']
      const isVideoLink = videoPlatforms.some(platform => result.includes(platform))

      if (isVideoLink) {
        wx.showModal({
          title: '识别成功',
          content: '已识别到视频链接，是否在浏览器中打开？',
          success: (modalRes) => {
            if (modalRes.confirm) {
              // 复制链接到剪贴板
              wx.setClipboardData({
                data: result,
                success: () => {
                  wx.showModal({
                    title: '链接已复制',
                    content: '链接已复制到剪贴板，请在浏览器中粘贴打开视频链接',
                    showCancel: false,
                    confirmText: '知道了'
                  })
                }
              })
            }
          }
        })
      } else {
        // 普通链接也复制并提示
        wx.setClipboardData({
          data: result,
          success: () => {
            wx.showModal({
              title: '识别成功',
              content: '链接已复制到剪贴板，可以在浏览器中打开',
              showCancel: false,
              confirmText: '知道了'
            })
          }
        })
      }
    } else {
      // 非链接内容
      wx.showModal({
        title: '识别成功',
        content: `扫描内容：${result}`,
        showCancel: false
      })
    }
  }
})

