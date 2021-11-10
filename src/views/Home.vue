<template>
  <Swiper :banner="homeBanner"/>

  <div class="container">
    <div class="intro">
      <h2>熱門景點</h2>
      <p>台灣的各個美景，都美不勝收。等你一同來發現這座寶島的奧妙！</p>
    </div>
    <div class="card-container">
      <Card v-for="scenicSpot in scenicSpots" :key="scenicSpot.ID" :travelData="scenicSpot"/>
    </div>
  </div>
  
  <Footer />
</template>


<script>
import Swiper from '../components/Swiper.vue';
import Card from '../components/Card.vue';
import Footer from '../components/Footer.vue';
import API from '@/services/API.js'

export default {
  name: "Home",
  components: {
    Swiper, Card, Footer, 
  }, 

  data() {
    return {
      homeBanner: "@/assets/images/banner1.png",
      scenicSpots: null,
    }
  },
  created() {
    API.getScenicSpots()
    .then( response => {
      this.scenicSpots = response.data
    })
    .catch(error => {
      console.log(error)
    })
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/typography.scss';

  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    position: relative;
    z-index: -1;

    @media(min-width: 576px) {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .intro {
    h2 {
      font-size: 20px;
      color: typography.$primary-color;

      @media(min-width: 768px) {
        font-size: 30px;
      }
    }

    p {
      font-size: 14px;
      color: typography.$pale-gray;

      @media(min-width: 768px) {
        font-size: 16px;
      }
    }


  }
</style>
