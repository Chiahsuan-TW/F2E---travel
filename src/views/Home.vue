<template>
  <Swiper @on-submit="getData"/>

  <div class="container">
    <div class="intro">
      <h2>熱門景點</h2>
      <p>台灣的各個美景，都美不勝收。等你一同來發現這座寶島的奧妙！</p>
    </div>
    <div class="card-container">
      <Card v-for="scenicSpot in scenicSpots" :key="scenicSpot.ID" :travelData="scenicSpot" @click="specificID(scenicSpot)"/>
      <Modal :travelData="modalData" />
    </div>
  </div>
  
  
</template>


<script>
import Swiper from '../components/Swiper.vue';
import Card from '../components/Card.vue';
import Modal from '../components/Modal.vue';
import API from '@/services/API.js'

export default {
  name: "Home",
  components: {
    Swiper,
    Card,
    Modal
  }, 
  data() {
    return {
      scenicSpots: null,
      modalData:{}
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
  },
  methods: {
    specificID(scenicSpot) {
      this.modalData = scenicSpot
    },
    getData(keyword) {
      API.getCityScenicSpots(keyword)
          .then( response => {
      this.scenicSpots = response.data
    })
          .catch(error => {
          console.log(error)
      })
      this.$router.push({ name: 'Home', query: { search: `${keyword}`} })
    },
  },
  computed: {
      getCardsByPage() {
        const CARDS_PER_PAGE = 8;
        const startIndex = (1 - 1) * CARDS_PER_PAGE
        console.log(this.ScenicSpots.slice(startIndex, startIndex + CARDS_PER_PAGE))
        return this.ScenicSpots.slice(startIndex, startIndex + CARDS_PER_PAGE)
      }
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/typography.scss';

  .container {
    padding: 40px;
  }
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;

    @media(min-width: 576px) {
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .intro {
    margin-bottom: 30px;

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
