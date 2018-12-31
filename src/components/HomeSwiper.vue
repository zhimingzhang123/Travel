<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->

      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt="">
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    data() {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          // loop: true,
        },
      }
    },
    props: {
      swiperList: {
        type: Array
      }
    },
    computed: {
      showSwiper() {
        return this.swiperList.length
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  // 由于scoped的限制，swiper-pagination-bullet-active 轮播小点是由子组件控制的，无法进行颜色更改，
  // 使用 >>> 表示对子组件class进行修饰
  .wrapper >>> .swiper-pagination-bullet-active
    background red !important

  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.25%
    .swiper-img
      width 100%
</style>