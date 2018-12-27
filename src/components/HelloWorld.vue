<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
  import HomeHeader from './Header'
  import HomeSwiper from './HomeSwiper'

  export default {
    name: '',
    data() {
      return {}
    },
    components: {
      HomeHeader,
      HomeSwiper
    }
  }
</script>

<style scoped>

</style>
