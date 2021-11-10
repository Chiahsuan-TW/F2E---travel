<template>
  <Swiper />

  <div class="container">
    <div class="intro">
      <h2>熱門景點</h2>
      <p>台灣的各個美景，都美不勝收。
等你一同來發現這座寶島的奧妙！</p>
    </div>
    <div class="card-container">
      <Card v-for="event in events" :key="event.ID" :travelData="event"/>
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
  name: "Events",
  components: {
    Swiper, Card, Footer,
  }, 

  data() {
    return {
      events: null,
    }
  },
  created() {
    API.getEvents()
    .then( response => {
      console.log(response.data)
      this.events = response.data
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