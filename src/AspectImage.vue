<template>
    <div class="__vp-wrapper">
        <div ref="imageWrapper" class="__vp-image-wrapper">
            <img v-if="src" ref="img" class="__vp-image" :src="src" :style="style"/>
        </div>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'AspectImage',
        props: {
            src: String,
            /**
             * scaleToFill 不保持纵横比缩放图片，使图片的宽高完全拉伸至填满 image 元素
             * aspectFill 保持纵横比缩放图片，只保证图片的短边能完全显示出来。也就是说，图片通常只在水平或垂直方向是完整的，另一个方向将会发生截取。
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
                style: {}
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
                this.wrapperWidth = this.$refs.imageWrapper.offsetWidth
                this.wrapperHeight = this.$refs.imageWrapper.offsetHeight
                if (this.mode === 'aspectFill') {
                    this.doAspectFill()
                } else if (this.mode === 'scaleToFill') {
                    this.doScaleToFill()
                }
            },
            doAspectFill () {
                let style = {}
                style.position = 'absolute'
                let imgRatio = this.imgWidth / this.imgHeight
                let wrapperRatio = this.wrapperWidth / this.wrapperHeight
                if (imgRatio > wrapperRatio) { // 如果宽度大于高度
                    style.height = '100%'
                    style.top = '0'
                    let minW = this.wrapperHeight / this.imgHeight * this.imgWidth // 缩小后的图片宽度
                    style.left = (this.wrapperWidth - minW) / 2 + 'px'
                } else {
                    style.width = '100%'
                    style.left = '0'
                    let minH = this.wrapperWidth / this.imgWidth * this.imgHeight // 缩小后的图片高度
                    style.top = (this.wrapperHeight - minH) / 2 + 'px'
                }
                this.style = style
            },
            doScaleToFill () {
                this.style = {
                    height: '100%',
                    width: '100%'
                }
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
