<template>
  <Swiper @on-submit="getData"/>

  <div class="container">
    <div class="intro">
      <h2>熱門景點</h2>
      <p>台灣的各個美景，都美不勝收。
等你一同來發現這座寶島的奧妙！</p>
    </div>
    <div class="card-container">
      <Card v-for="event in events" :key="event.ID" :travelData="event" @click="specificID(event)"/>
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
  name: "Events",
  components: {
    Swiper, Card, Modal,
  }, 

  data() {
    return {
      events: null,
      modalData: {}
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
  },
  methods: {
    specificID(event) {
      this.modalData = event;
    },
    getData(keyword) {
      API.getCityEvents(keyword)
          .then( response => {
      this.events = response.data
    })
          .catch(error => {
          console.log(error)
      })
      // this.$router.push(`/search/${keyword}`)
    }
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