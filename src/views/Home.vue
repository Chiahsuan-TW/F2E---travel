<template>
  <Swiper />
  <div class="card-container">
    <Card v-for="scenicSpot in scenicSpots" :key="scenicSpot.ID" :scenicSpot="scenicSpot"/>
  </div>
</template>


<script>
import Swiper from '../components/Swiper.vue';
import Card from '../components/Card.vue';

export default {
  name: "Home",
  components: {
    Swiper,
    Card,
  }, 

  data() {
    return {
      scenicSpots: [
        { 
          ID: "C1_315081000H_020180",
          Name: "哈巴狗與睡美人岩",
          OpenTime: "全天候開放",
          PictureUrl1: "https://www.eastcoast-nsa.gov.tw/image/29064/640x480",
          Adress: "臺東縣951綠島鄉溫泉路167號",
          Description: "早期稱為柵口，後來更名為「柴口」，為綠島主要浮潛區之一。海岸地形以珊瑚裙礁為主體",
          TicketInfo: "免費",
          Phone: "886-8-9672026",
          Class1: "自然風景類",
        },
        {
          Name: "哈巴狗與睡美人岩",
          OpenTime: "全天候開放",
          PictureUrl1: "https://www.eastcoast-nsa.gov.tw/image/29064/640x480",
          Adress: "臺東縣951綠島鄉溫泉路167號",
          Description: "早期稱為柵口，後來更名為「柴口」，為綠島主要浮潛區之一。海岸地形以珊瑚裙礁為主體",
          TicketInfo: "免費",
          Phone: "886-8-9672026",
          Class1: "自然風景類",
        },
        {
          Name: "哈巴狗與睡美人岩",
          OpenTime: "全天候開放",
          PictureUrl1: "https://www.eastcoast-nsa.gov.tw/image/29064/640x480",
          Adress: "臺東縣951綠島鄉溫泉路167號",
          Description: "早期稱為柵口，後來更名為「柴口」，為綠島主要浮潛區之一。海岸地形以珊瑚裙礁為主體",
          TicketInfo: "免費",
          Phone: "886-8-9672026",
          Class1: "自然風景類",
        },
      ]
    }
  }
}
</script>
