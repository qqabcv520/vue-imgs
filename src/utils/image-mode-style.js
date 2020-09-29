/*
 * @Author: 616749285@qq.com
 * @Date: 2020-09-29 17:00:55
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2020-09-29 18:29:05
 * @Description:  根据mode生成图片样式，参照微信小程序Image组件mode属性
 */

/**
 * 获取图片、容器宽高比
 * @param {object} param0 
 */
const getRatio = ({ imgWidth, imgHeight, wrapperWidth, wrapperHeight }) => {
  return {
    imgRatio: imgWidth / imgHeight,
    wrapperRatio: wrapperWidth / wrapperHeight
  }
}

/**
 * 获取缩小后的图片宽度
 * @param {object} param0 
 */
const getShrinkImgWidth = ({ wrapperHeight, imgHeight, imgWidth }) => wrapperHeight / imgHeight * imgWidth

/**
 * 获取缩小后的图片高度
 * @param {object} param0 
 */
const getShrinkImgHeight = ({ wrapperWidth, imgHeight, imgWidth }) => wrapperWidth / imgWidth * imgHeight

/**
 * 获取aspect的style
 * @param {object} context 
 * @param {boolean} isFill 
 */
const getAspectStyle = (context, isFill = false) => {
    let style = {}
    const { wrapperWidth, wrapperHeight } = context
    const { imgRatio, imgRatio } = getRatio(context)
    if ((imgRatio > wrapperRatio && isFill) || (imgRatio < wrapperRatio && !isFill)) { // 如果图片宽高比大于容器宽高比，并且mode为fill || 如果图片宽高比小于容器宽高比，并且mode为fit
        style = {
            height: '100%',
            top: '0',
            left: (wrapperWidth - getShrinkImgWidth(context)) / 2 + 'px'
        }
    } else {
        style = {
            width: '100%',
            left: '0',
            top: (wrapperHeight - getShrinkImgHeight(context)) / 2 + 'px'
        }
    }
    return { style: { position: 'absolute', ...style } }
}

// 缩放模式，不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
const scaleToFill = () => ({
  style: {
    height: '100%',
    width: '100%'
  }
})

// 缩放模式，保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来
const aspectFit = context => {
    return getAspectStyle(context)
}

// 缩放模式，保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取
const aspectFill = context => {
    return getAspectStyle(context, true)
}

// 缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
const widthFix = () => ({
    style: {
      width: '100%'
    },
    wrapStyle: {
      height: 'auto'
    }
})

// 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
const heightFix = () => ({
    style: {
      height: '100%'
    },
    wrapStyle: {
      width: 'auto'
    }
})

// 裁剪模式，不缩放图片，只显示图片的顶部区域
const top = () => ({
  style: {
    position: 'absolute',
    width: '100%',
    top: '0',
    left: '0'
  }
})

// 裁剪模式，不缩放图片，只显示图片的底部区域
const bottom = () => ({
  style: {
    position: 'absolute',
    width: '100%',
    bottom: '0',
    left: '0'
  }
})

// 裁剪模式，不缩放图片，只显示图片的中间区域
const center = () => ({
  style: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0'
  }
})

// 裁剪模式，不缩放图片，只显示图片的左边区域
const left = () => ({
  style: {
    position: 'absolute',
    height: '100%',
    top: '0',
    left: '0'
  }
})

// 裁剪模式，不缩放图片，只显示图片的右边区域
const right = () => ({
  style: {
    position: 'absolute',
    height: '100%',
    top: '0',
    right: '0'
  }
})

// 裁剪模式，不缩放图片，只显示图片的左上边区域
const topLeft = () => ({
  style: {
    position: 'absolute',
    top: '0',
    left: '0'
  }
})

// 裁剪模式，不缩放图片，只显示图片的右上边区域
const topRight = () => ({
  style: {
    position: 'absolute',
    top: '0',
    right: '0'
  }
})

// 裁剪模式，不缩放图片，只显示图片的左下边区域
const bottomLeft = () => ({
  style: {
    position: 'absolute',
    bottom: '0',
    left: '0'
  }
})

// 裁剪模式，不缩放图片，只显示图片的右下边区域
const bottomRight = () => ({
  style: {
    position: 'absolute',
    bottom: '0',
    right: '0'
  }
})

export default {
  scaleToFill,
  aspectFit,
  aspectFill,
  widthFix,
  heightFix,
  top,
  bottom,
  center,
  left,
  right,
  topLeft,
  topRight,
  bottomLeft,
  bottomRight
}
