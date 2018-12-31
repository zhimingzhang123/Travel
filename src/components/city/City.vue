<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'

  import CityHeader from './CityHeader'
  import CitySearch from './Serach'
  import CityList from './List'
  import CityAlphabet from './Alphabet'

  export default {
    name: "",
    data() {
      return {
        hotCities: [],
        cities: {},
        letter: ''
      }
    },
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    },
    mounted() {
      this.getCityData()
    },
    methods: {
      getCityData() {
        axios.get('/api/city.json')
          .then(this.getCitySuccess)
      },
      getCitySuccess(res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.hotCities = data.hotCities
          this.cities = data.cities
        }
      },
      handleLetterChange(letter) {
        this.letter = letter
      }
    }
  }
</script>

<style type="text/stylus" lang="stylus" scoped>

</style>