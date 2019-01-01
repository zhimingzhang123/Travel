<template>
  <div>
    <banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
  import Axios from 'axios'

  import Banner from './Banner'
  import DetailHeader from './Header'
  import DetailList from './List'

  export default {
    name: "Detail",
    props: ['id'],
    components: {
      Banner,
      DetailHeader,
      DetailList
    },
    data() {
      return {
        list: [],
        sightName: '',
        bannerImg: '',
        gallaryImgs: [],
        categoryList: []
      }
    },
    mounted() {
      this.getDetailData()
    },
    methods: {
      getDetailData() {
        Axios.get('/api/detail.json?id=', {
          params: {
            id: this.id
          }
        }).then(this.getDetailSuccess)
      },
      getDetailSuccess(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.categoryList = data.categoryList
        }
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
  .content
    height 50rem
</style>