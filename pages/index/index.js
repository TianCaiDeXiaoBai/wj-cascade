import areaList from "../../utils/area.js"
import areaList2 from "../../utils/area_new.js"
Page({
  data: {
    regionShow: false,
    regionShow2: false,
    region: "",
    region2: "",
    areaList,
    areaList2,
    areaStr: '',
    areaStr2: ''
  },
  onLoad() {
    
  },
 
  onAreaChange(e){
    let { value } = e.detail
    this.setData({
      regionShow: false,
      areaStr:value
    })
  },
  onAreaChange2(e){
    let { value } = e.detail
    this.setData({
      regionShow2: false,
      areaStr2:value
    })
  },
  onClose(){
    this.setData({
      regionShow: false,
      regionShow2: false
    })
  },
  onPop(e){
    let show = e.currentTarget.dataset.show
    this.setData({
      [show]: true
    })
  },
  onCopy() {
    wx.setClipboardData({
      data: 'https://github.com/TianCaiDeXiaoBai/wj-region',
    })
  }
})
