# vue-imgs

![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)


vue图片组件

[在线演示](https://qqabcv520.github.io/vue-imgs/examples/) 

## 安装
```
npm i vue-imgs --save
```
或者  
```
yarn add vue-imgs
```
或者直接引入
```
<script src="../dist/vue-imgs.js"></script>
```

##使用
AspectImage
```
import Vue from 'vue'
import {AspectImage} from 'vue-imgs'

Vue.component('VueClipboard', VueClipboard) // 注册组件
```
```
<aspect-image class="aspect-img" src="https://xxx.jpg" mode="scaleToFill" ></aspect-image>
```
## TODO
* 图片懒加载
* 占位图
* webP格式
* 缩放模式aspectFit：保持比例显示全部内容
* 缩放模式widthFix：宽度不变，高度自动变化，保持原图宽高比不变
* 缩放模式auto：按照图片原大小显示

