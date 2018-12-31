<template>
  <ul class="list">
    <li class="item"
        :ref="item"
        v-for="item of letters"
        :key="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchMove"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name: "",
    props: {
      cities: Object
    },
    data() {
      return {
        touchStatus: false,
        startY: 0,
        timer: null
      }
    },
    updated() {
      this.startY = this.$refs['A'][0].offsetTop // 获取A字母距离蓝色下沿的位置
      console.log(this.startY)
    },
    methods: {
      handleLetterClick(e) {
        this.$emit('change', e.target.innerText)
      },
      handleTouchStart() {
        this.touchStatus = true
      },
      handleTouchMove(e) {
        if (this.touchStatus) {
          if (this.timer) {
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            const touchY = e.touches[0].clientY - 79 // 获取手指的位置到蓝色下沿的位置
            const index = Math.floor((touchY - this.startY) / 20) // 获取字母的下标
            if (index >= 0 && this.letters.length) {
              this.$emit('change', this.letters[index])
            }
          }, 16)
        }
      },
      hanldeTouchEnd() {
        this.touchStatus = false
      }
    },
    computed: {
      letters() {
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center // 位于容器中心
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>