# wj-cascader
微信小程序级联选择，一般的插件都是一个页面把3层都展示出来，会导致如果某一层太长，就显示不全。另外还有ui方面的考虑，做这个插件的初衷，是ui出的的是这种上面点选，下面联动的设计图，直接用市面的插件硬套就不太合适。

## 使用
```
 <!--引用页面的.json文件  -->

 {
  "usingComponents": {
    "cascader": "../../components/wj-cascader/index"
  }
}
<!-- 引用页面的.wxml文件 -->
<wj-cascader list="{{areaList}}" bindcascadechange="onAreaChange" value="{{region}}" labelKey="name" childrenKey="children" bindclose="onClose" level="2" title="所在城市"></wj-cascader>
```

### 效果
<img src="http://m.qpic.cn/psc?/V13eiHFe1CxpVk/TmEUgtj9EK6.7V8ajmQrEAT6GZtUd6RFEDNJ083c4Y1aBiDIMRTGmigZkYDs5j1u6.uzF7fA36l.TV17V5s3mLoXgOPgoGQNHGLDpj1cR1U!/b&bo=wAHAAwAAAAACh6E!&rf=viewer_4.gif" width="375">

### 作者微信
<img src="http://m.qpic.cn/psc?/V13eiHFe1CxpVk/TmEUgtj9EK6.7V8ajmQrEEniGxN87*NECA1QieSlYOS195sRoUjKCCUKi3my7Uw0RqVe4w3T4QUnayxT0T*AwE*MvY*QSrE0cOsSL1S*0UQ!/b&bo=rgGuAQAAAAABFzA!&rf=viewer_4.png" width="375"> 
