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

* [AspectImage组件](#aspectimage)  
* [ImgPreview组件](#imgpreview)

### AspectImage

图片组件

#### 注册组件

```
import {AspectImage} from 'vue-imgs'
export default {
  components: {
      AspectImage
  }
}
```
#### 属性

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| mode | `String` | aspectFill | 图片的缩放模式 |
| src  | `String` | null | 图片链接 |



### ImgPreview

图片预览组件

#### 注册组件

```
import {ImgPreview} from 'vue-imgs'
export default {
  components: {
      ImgPreview
  }
}
```
#### 属性

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| mode | `String` | aspectFill | 图片缩放模式 |
| src  | `String` | '' | 图片链接 |
| title  | `String` | '' | 图片标题，可以是HTML |
| group  | `String\|Number` | (默认为uuid，即单独一组) | 指定图片分组索引，相同索引归属为一个分组，同组预览时可切换预览 |
| thumbSrc  | `String` | (默认为src) | 小图时的src |
| order  | `Number` | 0 | 同分组图片排序 |

#### 缩放模式

`'scaleToFill'` 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素

`'aspectFill'` 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。

## TODO

* 图片懒加载
* 占位图
* webP格式
* 缩放模式aspectFit：保持比例显示全部内容
* 缩放模式widthFix：宽度不变，高度自动变化，保持原图宽高比不变
* 缩放模式auto：按照图片原大小显示

