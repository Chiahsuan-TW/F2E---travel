<template>
  <div v-if="travelData" class="card">
    <div v-if="travelData.Picture.PictureUrl1" class="card-image"><img :src="travelData.Picture.PictureUrl1" alt=""></div>
    <div v-else class="card-image"><img src="../assets/images/card-image.png" alt=""></div>
    <div class="card-content">
      <div class="card-content-title">
        <h3>{{travelData.Name}}</h3>
        <div class="open-time">
          <span>{{travelData.OpenTime}}</span>
        </div>
      </div>
      <div class="card-content-detail">
        <div class="pin"><img src="../assets/images/pin.png" alt=""></div>
        <p>{{travelData.Address}}</p>
      </div>
      
      <!-- Button trigger modal -->
      <button @click="$emit('click')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">      
        了解更多
      </button>
    </div>
  </div>
</template>


<script>
export default {
  name: "Card",
  
  props: {
    travelData: Object,
  }, 
  // computed: {
  //   trimOpenTime() {
  //     if(!this.travelData.OpenTime) return
  //     if (this.travelData.OpenTime.length > 30) {
  //      return this.travelData.OpenTime
  //         .toString()
  //         .split('；')
  //         .filter(time => time.includes('Sun'))[0]
  //         .toString()
  //     }
  //     return this.travelData.OpenTime
  //   }
  // },
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/typography.scss';

  .card {
    width: 294px;
    // height: 346px;
    box-shadow: 2px 2px 4px rgba(114, 142, 171, 0.1), -6px -6px 20px rgba(255, 255, 255, 0.6), 4px 4px 20px rgba(111, 140, 176, 0.41);
  
  &-image {
    width: 100%;
    height: 184px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &-content {
    padding: 30px 20px;

    &-title {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color: typography.$dark-gray;
    }

    h3 {
      font-size: 20px;
    }

    span {
      font-size: 12px;
    }
  }

  &-content-detail {
    display: flex;
    gap: 5px;

    .pin{
      width: 12px;
      height: 15px;
    }

    p {
      font-size: 16px;
      color: typography.$dark-gray;
    }
  }

  button {
    background-color: #fff;
    color: typography.$primary-color;
    border: 2px solid typography.$primary-color;
    border-radius: 5px;
  }
}

.modal_modified {
  display: none;
  position: absolute;
  z-index: -2;
  top: 0;
}
</style>