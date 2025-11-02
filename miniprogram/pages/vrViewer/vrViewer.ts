// vrViewer.ts - VR全景查看器页面逻辑
// 功能：显示VR全景内容

Page({
  data: {
    vrUrl: '',
    vrTitle: 'VR全景'
  },

  onLoad(options: any) {
    const { url, title } = options
    
    this.setData({
      vrUrl: decodeURIComponent(url || ''),
      vrTitle: decodeURIComponent(title || 'VR全景')
    })
  }
})

