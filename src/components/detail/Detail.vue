<template>
  <div>
    <banner></banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
  import Banner from './Banner'
  import DetailHeader from './Header'

  export default {
    name: "",
    props: ['id'],
    components: {
      Banner,
      DetailHeader
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .content
    height 50rem
</style>