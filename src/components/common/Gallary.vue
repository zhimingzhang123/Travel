<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,index) of imgs" :key="index">
          <img class="gallary-img"
               :src="item">
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination">
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          paginationType: 'fraction',
          observer:true,
          observeParents:true, // 用于一开始隐藏DOM，点击时触发显示DOM，每次监听到自己或父元素发生变化，就自我刷新一次
        }
      }
    },
    props: {
      imgs: {
        type: Array
      }
    },
    methods: {
      handleGallaryClick() {
        this.$emit('close')
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom 0
    background #000
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallary-img
        width 100%
    .swiper-pagination
      color #fff
      bottom -1rem
</style>