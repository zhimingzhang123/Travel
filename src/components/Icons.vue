<template>
  <div class="icons">
    <swiper>
      <!--swiper-slide 表示一页-->
      <!--多个swiper-slide 表示多页-->
      <swiper-slide v-for="(icons, index) of pages" :key="index">
        <div class="icon"
             v-for="item of icons"
             :key="item.id"
        >
          <div class="icon-image">
            <img class="icon-image-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>


    </swiper>
  </div>

</template>

<script>
  export default {
    name: "Icons",
    data() {
      return {
        iconList: [
          {
            id: '01',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
          {
            id: '02',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          },
          {
            id: '03',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '北京必玩'
          },
          {
            id: '4',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
          {
            id: '5',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          },
          {
            id: '6',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '北京必玩'
          },
          {
            id: '7',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            desc: '景点门票'
          },
          {
            id: '8',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            desc: '一日游'
          },
          {
            id: '9',
            imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            desc: '北京必玩'
          },
        ]
      }
    },
    computed: {
      /*
       * 将一维数组转换为二维数组
       * page = [ [page1], [page2] ]
       *
       * */

      pages() {
        const pages = []
        this.iconList.forEach((item, index) => {
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(item)
        })
        return pages
      }
    }

  }
</script>

<style type="text/stylus" lang="stylus" scoped>
  // 导入@import， 使用符号~
  @import "~@/assets/styles/varibles.styl"
  @import "~@/assets/styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%

  .icon
    position relative
    overflow hidden
    float left
    width 25%
    height 0
    padding-bottom 25%
    /*background #25a4bb*/
    .icon-image
      position absolute
      top 0
      left 0
      right 0
      bottom .22rem
      box-sizing border-box
      padding .1rem
      .icon-image-content
        height 100%
        display block
        margin 0 auto
    // 水平左右居中
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height .44rem
      line-height .44rem
      text-align center
      color $darkTextColor
      ellipse()
</style>