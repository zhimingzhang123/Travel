<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrapper">
            <div class="btn">
              {{city}}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="btn-list">
          <div class="btn-wrapper"
               v-for="city in hotCities"
               :key="city.id"
               @click="handleClick(city.name)"
          >
            <div class="btn">
              {{city.name}}
            </div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(city, key) of cities"
           :key="key"
           :ref="key"
      >
        <div class="title border-bottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="addr of city"
            :key="addr.id"
            @click="handleClick(addr.name)"
          >{{addr.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  import BScroll from 'better-scroll'
  let wrapper = document.querySelector('.wrapper')

  export default {
    name: "",
    props: {
      hotCities: Array,
      cities: Object,
      letter: String
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper)
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0]
          this.scroll.scrollToElement(element)
        }
      }
    },
    methods: {
      ...mapMutations(['changeState']),

      handleClick(city) {
        this.changeState(city)
        this.$router.push('/')
      }
    },
    computed: {
      ...mapState({
        city: 'city'
      })
    },
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc

  .border-bottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc

  .list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
    .btn-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .btn-wrapper
        float left
        width 33.33%
        .btn
          text-align center
          padding .1rem 0
          margin .1rem
          border .02rem solid #ccc
    .item-list
      line-height .72rem
      padding-left .2rem
      color #666

</style>