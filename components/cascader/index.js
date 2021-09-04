// components/region.js
 
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '选择'
    },
    // 区域数据列表
    list: {
      type: Array,
      value: []
    },
    // 数据列表里自定义的文字
    allStr: {
      type: String,
      value: '不限'
    },
    value: {
      type: String,
      value: ''
    },
    childrenKey: {
      type: String,
      value: 'children'
    },
    labelKey: {
      type: String,
      value: 'label'
    },
    level: {
      type: [String, Number],
      value: 3
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    area: [],
    areaStr: "",
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached: function () {
    // 默认选中
    let area = [{
      [this.data.labelKey]: '请选择'
    }]
    let areaStr = this.data.value
    let areaArr = []
    let active = this.data.active
    if (areaStr) {
      area = []
      areaArr = areaStr.split('/')
      this.data.list.forEach(province => {
        if (province[this.data.labelKey] == areaArr[0]) {
          area.push(province)
          if (areaArr.length > 1) {
            province[this.data.childrenKey] && province[this.data.childrenKey].forEach(city => {
              if (city[this.data.labelKey] == areaArr[1]) {
                area.push(city)
                active = 1
              }
            })
            if (areaArr.length > 2) {
              city[this.data.childrenKey] && city[this.data.childrenKey].forEach(district => {
                if (district[this.data.labelKey] == areaArr[1]) {
                  area.push(district)
                  active = 2
                }
              })
            }
          }
        }
      })
    }
    this.setData({
      area,
      areaStr,
      active
    })
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onAreaChange(e) {
      let item = e.currentTarget.dataset.item
      let idx = e.currentTarget.dataset.idx
      let regionShow = true
      // 判断是第一次选 还是 更新
      if (idx > this.data.area.length - 1) {
        this.data.area.push(item)
      } else {
        this.data.area[idx] = item
      }
      
      // 判断是否需要向左滑动
      if(item[this.data.labelKey] != this.data.allStr && idx < this.data.level - 1) {
        this.data.active++
      }

      // 判断是否选的是省级
      if (idx == 0) {
        let areaArr = this.data.area
        this.data.area = [areaArr.shift()]
        if (this.data.area[this.data.area.length - 1][this.data.labelKey] != this.data.allStr) {
          this.data.area.push({
            [this.data.labelKey]: '请选择'
          })
        }
      }

      // 判断是否选的是市级
      if (idx == 1 && this.data.level > 2) {
        let areaArr = this.data.area
        this.data.area = [areaArr.shift(),areaArr.shift()]
        if (this.data.area[this.data.area.length - 1][this.data.labelKey] != this.data.allStr) {
          this.data.area.push({
            [this.data.labelKey]: '请选择'
          })
        }
      }

      if (this.data.area.length >= this.data.area.length && this.data.area[this.data.area.length - 1][this.data.labelKey] !== '请选择') {
        regionShow = false
      }

      let areaStrArr = this.data.area.map(item => {
        return item[this.data.labelKey]
      })


      // 判断是否需要关闭弹窗
      if(item[this.data.labelKey] == this.data.allStr || idx == this.data.level - 1 || this.data.area[this.data.area.length - 2][this.data.labelKey] == this.data.allStr ) {
        regionShow = false
      }

      this.setData({
        area: this.data.area,
        active: this.data.active,
        areaStr: areaStrArr.join('/')
      })

      if (regionShow == false) {
        this.onClose()
        this.triggerEvent('cascadechange', {
          value: this.data.areaStr,
          items: this.data.area
        })
      }
    },
    onTabChange(e) {
      let active = e.currentTarget.dataset.idx
      this.setData({
        active
      })
    },
    onClose() {
      this.triggerEvent('close', {
        value: false
      })
    }
  }
})
