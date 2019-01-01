<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img"
           src="http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_600x330_682f736a.jpg">
      <div class="banner-info">
        <div class="banner-title">水奥雪世界</div>
        <div class="banner-number">55</div>
      </div>
    </div>
    <gallary :imgs="imgs" v-show="showGallary" @close="handeGallaryClose"></gallary>
  </div>
</template>

<script>
  import Gallary from '../common/Gallary'

  export default {
    name: "",
    data() {
      return {
        imgs: ['http://img1.qunarzz.com/sight/p0/1712/95/95f38f28a6ff19cba3.img.jpg_600x330_682f736a.jpg'],
        showGallary: false
      }
    },
    components: {
      Gallary,
    },
    methods: {
      handleBannerClick() {
        this.showGallary = true
      },
      handeGallaryClose() {
        this.showGallary = false
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        padding 0 .1rem
        font-size .4rem
      .banner-number
        margin-top .14rem
        padding 0 .4rem
        line-height .4rem
        height .4rem
        background rgba(0, 0, 0, .4)
        font-size .32rem
</style>