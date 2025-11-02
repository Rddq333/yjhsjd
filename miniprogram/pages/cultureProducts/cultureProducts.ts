// cultureProducts.ts - 文创情怀页面逻辑
// 功能：文创产品展示、分类筛选、产品详情

Component({
  data: {
    // 当前选中的分类
    currentCategory: 'all',

    // 分类列表
    categories: [
      { id: 'all', name: '全部' },
      { id: 'book', name: '书籍' },
      { id: 'gift', name: '纪念品' },
      { id: 'clothing', name: '服饰' },
      { id: 'stationery', name: '文具' },
      { id: 'postcard', name: '明信片' },
      { id: 'transparent', name: '透卡' }
    ],

    // 所有产品数据
    allProducts: [
      {
        id: 1,
        name: '红十三军历史画册',
        desc: '精美印刷，记录革命历程',
        price: 68,
        image: '',
        icon: '📖',
        category: 'book',
        hot: true,
        hasImage: false
      },
      {
        id: 2,
        name: '红色文化T恤',
        desc: '纯棉材质，舒适透气',
        price: 88,
        image: '',
        icon: '👕',
        category: 'clothing',
        hot: false,
        hasImage: false
      },
      {
        id: 3,
        name: '革命英雄纪念章',
        desc: '精美工艺，值得收藏',
        price: 38,
        image: '',
        icon: '🏅',
        category: 'gift',
        hot: true,
        hasImage: false
      },
      {
        id: 4,
        name: '红色主题笔记本',
        desc: '优质纸张，精美设计',
        price: 25,
        image: '',
        icon: '📔',
        category: 'stationery',
        hot: false,
        hasImage: false
      },
      {
        id: 5,
        name: '革命历史文献集',
        desc: '珍贵史料，限量发行',
        price: 128,
        image: '',
        icon: '📚',
        category: 'book',
        hot: false,
        hasImage: false
      },
      {
        id: 6,
        name: '红色文化帆布包',
        desc: '时尚实用，文化内涵',
        price: 58,
        image: '/images/product6.jpg',
        category: 'gift',
        hot: true,
        hasImage: true
      },
      {
        id: 7,
        name: '红十三军纪念明信片',
        desc: '精美设计，红色主题',
        price: 15,
        image: '/images/product7.jpg',
        category: 'postcard',
        hot: false,
        hasImage: true
      },
      {
        id: 8,
        name: '革命英雄明信片套装',
        desc: '一套10张，精美印刷',
        price: 35,
        image: '',
        icon: '💌',
        category: 'postcard',
        hot: true,
        hasImage: false
      },
      {
        id: 9,
        name: '红色文化透卡',
        desc: '透明材质，精美设计',
        price: 18,
        image: '/images/product9.jpg',
        category: 'transparent',
        hot: false,
        hasImage: true
      },
      {
        id: 10,
        name: '星宝IP形象透卡',
        desc: '透明卡片，收藏佳品',
        price: 25,
        image: '',
        icon: '💳',
        category: 'transparent',
        hot: true,
        hasImage: false
      }
    ],

    // 当前显示的产品列表
    productList: []
  },

  lifetimes: {
    attached() {
      // 页面加载时显示所有产品
      this.setData({
        productList: this.data.allProducts
      })
    }
  },

  methods: {
    // 切换分类
    switchCategory(e: any) {
      const categoryId = e.currentTarget.dataset.id
      let productList = []

      if (categoryId === 'all') {
        productList = this.data.allProducts
      } else {
        productList = this.data.allProducts.filter((item: any) => item.category === categoryId)
      }

      this.setData({
        currentCategory: categoryId,
        productList: productList
      })
    },

    // 查看产品详情
    viewProductDetail(e: any) {
      const product = e.currentTarget.dataset.product
      
      wx.showModal({
        title: product.name,
        content: `${product.desc}\n\n价格：¥${product.price}\n\n点击确定查看详情`,
        success: (res) => {
          if (res.confirm) {
            // TODO: 跳转到产品详情页
            wx.showToast({
              title: '产品详情页开发中',
              icon: 'none'
            })
          }
        }
      })
    }
  }
})

