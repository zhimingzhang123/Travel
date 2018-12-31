<template>
  <div>
    <div class="title">周末游玩</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item of weekendList"
        :key="item.id"
      >
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl"/>
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    data() {
      return {

      }
    },
    props: {
      weekendList: {
        type: Array
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem

  .item-img-wrapper
    height 0
    overflow hidden
    padding-bottom 37.09%

  .item-img
    width 100%

  .item-info
    padding .1rem
    min-width 0 // 文字过长时不出现... 省略号样式，加此项可以解决
    .item-title
      line-height .54rem
      font-size .32rem
      ellipse()
    .item-desc
      margin-top .1rem
      line-height .4rem
      color #ccc
      ellipse()
</style>