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
#### AspectImage
注册组件
```
import Vue from 'vue'
import {AspectImage} from 'vue-imgs'

Vue.component('AspectImage', AspectImage) // 注册组件
```
```
<aspect-image class="aspect-img" src="https://xxx.jpg" mode="scaleToFill" ></aspect-image>
```
属性

| 属性 | 类型 | 默认值  | 说明         |
| ---- | ------ | ---------- | -------------- |
| mode | String | aspectFill | 图片的缩放模式 |
| src  | String | null       | 图片链接   |

## TODO
* 图片懒加载
* 占位图
* webP格式
* 缩放模式aspectFit：保持比例显示全部内容
* 缩放模式widthFix：宽度不变，高度自动变化，保持原图宽高比不变
* 缩放模式auto：按照图片原大小显示

