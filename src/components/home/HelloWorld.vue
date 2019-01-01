<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <icons :iconList="iconList"></icons>
    <recommend :recommendList="recommendList"></recommend>
    <weekend :weekendList="weekendList"></weekend>
  </div>
</template>

<script>
  import axios from 'axios'

  import HomeHeader from './Header'
  import HomeSwiper from './HomeSwiper'
  import Icons from './Icons'
  import Recommend from './Recommend'
  import Weekend from './Weekend'

  export default {
    name: '',
    data() {
      return {
        // city: '',
        swiperList: [],
        iconList: [],
        recommendList: [],
        weekendList: []

      }
    },
    components: {
      HomeHeader,
      HomeSwiper,
      Icons,
      Recommend,
      Weekend
    },
    mounted() {
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json')
          .then(this.getHomeInfoSucc)
      },
      getHomeInfoSucc(res) {
        res = res.data
        if(res.ret && res.data) {
          const data = res.data
          // this.city = data.city
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.recommendList = data.recommendList
          this.weekendList = data.weekendList
        }
      },

    }
  }
</script>

<style scoped>

</style>
