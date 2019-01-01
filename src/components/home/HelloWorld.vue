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
  import { mapState } from 'vuex'

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
        weekendList: [],
        lastCity: ''

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
      this.lastCity = this.city
      this.getHomeInfo()
    },
    methods: {
      getHomeInfo() {
        axios.get('/api/index.json?city=' + this.city)
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
      }
    },
    computed: {
      ...mapState(['city'])
    },
    activated() {
      // 判断当前城市和上次城市是否相同
      if(this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }

    }
  }
</script>

<style scoped>

</style>
