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
    areaStr2: '',
    type: '',
    typeList:[{
      label: "农业",
      value: "001",
      children: [{
        label: "谷物种植",
        value: '00101',
        children:[{
          label: "稻谷种植",
          value: '0010101',
        },{
          label: "小麦种植",
          value: '0010102',
        }]
      }]
    }]
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
  onTypeChange(e){
    let { value } = e.detail
    this.setData({
      typeShow: false,
      type: value
    })
  },
  onClose(){
    this.setData({
      regionShow: false,
      regionShow2: false,
      typeShow: false
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
      data: 'https://github.com/TianCaiDeXiaoBai/wj-cascade',
    })
  }
})
