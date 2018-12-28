<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons></icons>
  </div>
</template>

<script>
  import HomeHeader from './Header'
  import HomeSwiper from './HomeSwiper'
  import Icons from './Icons'

  export default {
    name: '',
    data() {
      return {}
    },
    components: {
      HomeHeader,
      HomeSwiper,
      Icons
    }
  }
</script>

<style scoped>

</style>
