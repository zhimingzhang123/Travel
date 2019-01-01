<template>
  <div>
    <router-link
      tag="div"
      class="header-abs"
      to="/"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      景点详情
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        showAbs: true,
        // 控制样式的渐变
        opacityStyle: {
          opacity: 0 // 透明度0
        }
      }
    },
    activated() {
      window.addEventListener('scroll', this.handleScroll) // 获取当前位置距离顶部的距离
    },
    methods: {
      // 控制详情导航栏显示,透明度渐变
      handleScroll() {
        const top = document.documentElement.scrollTop
        if (top > 60) {
          let opacity = top / 140
          opacity = opacity > 1 ? 1 : opacity
          this.opacityStyle = {opacity}
          this.showAbs = false
        } else {
          this.showAbs = true
        }
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    text-align center
    line-height .8rem
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #fff
      font-size .4rem

  .header-fixed
    position fixed
    top 0
    left 0
    right 0
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    background $bgColor
    font-size .32rem
    color #fff
</style>