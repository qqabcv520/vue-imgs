<template>
    <div class="__vp-wrapper" :style="wrapStyle">
        <div ref="imageWrapper" class="__vp-image-wrapper">
            <img v-if="src" ref="img" class="__vp-image" :src="src" :style="style"/>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    import imageModeStyle from './utils/image-mode-style'

    export default {
        name: 'AspectImage',
        props: {
            src: String,
            default: '',
            /**
             * scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
             * aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
             * aspectFit 保持纵横比缩放图片，使图片的长边能完全显示出来。也就是说，可以完整地将图片显示出来。
             * widthFix 宽度不变，高度自动变化，保持原图宽高比不变
             * heightFix 缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
             */
            mode: {
                type: String,
                default: 'aspectFill'
            }
        },
        data () {
            return {
                imgObj: null,
                imgWidth: null,
                imgHeight: null,
                wrapperWidth: null,
                wrapperHeight: null,
                style: {},
                wrapStyle: {}
            }
        },
        mounted () {
            this.init()
        },
        methods: {
            init () {
                if (this.src == null) {
                    return
                }
                this.imgObj = new Image()
                this.imgObj.src = this.src
                this.imgObj.onload = () => {
                    this.imgWidth = this.imgObj.naturalWidth
                    this.imgHeight = this.imgObj.naturalHeight
                    this.updateSize()
                }
            },
            /**
             * 重新计算图片布局，当wrapper宽度时，应该调用。
             */
            updateSize () {
                this.$nextTick(() => {
                    const { $refs, mode } = this
                    const { offsetWidth: wrapperWidth, offsetHeight: wrapperHeight } = $refs.imageWrapper
                    Object.assign(this, {
                        wrapperWidth,
                        wrapperHeight,
                        ...(imageModeStyle[mode] || imageModeStyle['scaleToFill'])()
                    })
                })
            }
        },
        watch: {
            src () {
                this.init()
            },
            mode () {
                this.updateSize()
            }
        }
    }
</script>

<style>
    .__vp-wrapper  {
        height: 50px;
        width: 50px;
        display: inline-block;
    }
    .__vp-image-wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: relative;
    }

</style>
