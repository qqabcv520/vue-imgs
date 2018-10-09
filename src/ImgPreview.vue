<template>
    <aspect-image :src="thumbSrc" @click.native="showPre" :mode="mode">
        <slot></slot>
    </aspect-image>
</template>

<script>
    import Vue from 'vue'
    import AspectImage from './AspectImage'
    import PreviewerComponent from './PhotoSwipe'
    console.log(Vue)
    export default {
        name: 'ImgPreview',
        components: {
            AspectImage
        },
        props: {
            /**
             * 查看大图时图片分组，默认uuid（单独一组）
             */
            group: {
                type: [String, Number],
                default () {
                    return uuid(8, 16)
                }
            },
            /**
             * 原图src
             */
            src: {
                type: String,
                default: ''
            },
            /**
             * 缩略图src，不填直接显示原图
             */
            thumbSrc: {
                type: String,
                default () {
                    return this.src
                }
            },
            /**
             * 排序
             */
            order: {
                type: Number,
                default: 0
            },
            mode: {
                type: String,
                default: 'aspectFill'
            }
        },
        data () {
            return {
            }
        },
        mounted () {
            // 把当前组件加入group
            // 不同父组件的group列表相互独立
            this.$parent.$imgPreviews = this.$parent.$imgPreviews || {}
            this.$parent.$imgPreviews[this.group] = this.$parent.$imgPreviews[this.group] || []
            this.$parent.$imgPreviews[this.group].push(this)
            this.$parent.$imgPreviews[this.group].sort((a, b) => a.order - b.order)

            // 生成全局唯一的Previewer组件加入dom,并将实例存入$root.$previewer
            const Previewer  = Vue.extend(PreviewerComponent)
            this.previewer = this.$root.$previewer
            if (!this.previewer) {
                this.previewer = new Previewer({
                    el: document.createElement('div'),
                    props: {
                        list: {
                            type: Array,
                            default () {
                                return []
                            }
                        }
                    }
                })
                document.body.appendChild(this.previewer.$el)
            }
            this.$root.$previewer = this.previewer
        },
        destroyed () {
            this.$parent.$imgPreviews[this.group] = this.$parent.$imgPreviews[this.group].filter(value => value !== this)
        },
        methods: {
            /**
             * 展示大图
             */
            showPre () {
                this.previewer.list = this.componentList.map(value => ({src: value.src}))
                this.previewer.options = {
                    getThumbBoundsFn: index => {
                        let thumbnail = this.componentList[index].$el.getElementsByTagName('img')[0]
                        let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                        let rect = thumbnail.getBoundingClientRect()
                        return {x: rect.left, y: rect.top + pageYScroll, w: rect.width, h: rect.height}
                    }
                }
                this.previewer.show(this.componentList.indexOf(this))
            }
        },
        computed: {
            /**
             * 当前group的所有组件
             * @returns {*}
             */
            componentList () {
                return this.$parent.$imgPreviews[this.group]
            }
        }
    }
    function uuid (len, radix) {
        let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
        let uuid = []
        let i
        radix = radix || chars.length
        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
        } else {
            let r
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
            uuid[14] = '4'
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16
                    uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
                }
            }
        }
        return uuid.join('')
    }
</script>

<style>
</style>
