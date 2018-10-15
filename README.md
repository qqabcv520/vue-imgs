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
import {AspectImage} from 'vue-imgs'
export default {
  components: {
      AspectImage
  }
}
```
属性

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| mode | String | aspectFill | 图片的缩放模式 |
| src  | String | null | 图片链接 |

#### ImgPreview
注册组件
```
import {ImgPreview} from 'vue-imgs'
export default {
  components: {
      ImgPreview
  }
}
```
属性

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| mode | String | aspectFill | 图片的缩放模式 |
| src  | String | '' | 图片链接 |
| group  | String|Number | (uuid) | 图片分组，同一组的图片，预览时可所有滑动 |
| thumbSrc  | String | (默认为src) | 小图时的src |
| order  | Number | 0 | 同分组图片排序 |

## TODO
* 图片懒加载
* 占位图
* webP格式
* 缩放模式aspectFit：保持比例显示全部内容
* 缩放模式widthFix：宽度不变，高度自动变化，保持原图宽高比不变
* 缩放模式auto：按照图片原大小显示

