# vue-imgs
![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)

vue图片组件

[在线演示](https://qqabcv520.github.io/vue-imgs/examples/) 

## 安装
npm
```
npm i vue-imgs --save
```
yarn
```
yarn add vue-imgs
```
或者直接引入
```
<script src="../dist/vue-imgs.js"></script>
```

## 使用
AspectImage
```
import Vue from 'vue'
import {AspectImage} from 'vue-imgs'

Vue.component('AspectImage', AspectImage) // 注册组件
```
```
<aspect-image class="aspect-img" src="https://xxx.jpg" mode="scaleToFill" ></aspect-image>
/**
 * scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
 * aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
 */
```
## TODO
* 图片懒加载
* 占位图
* webP格式
* 缩放模式aspectFit：保持比例显示全部内容
* 缩放模式widthFix：宽度不变，高度自动变化，保持原图宽高比不变
* 缩放模式auto：按照图片原大小显示

