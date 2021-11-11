<template>
  <div v-if="travelData" class="card">
    <div v-if="travelData.Picture.PictureUrl1" class="card-image"><img :src="travelData.Picture.PictureUrl1" alt=""></div>
    <div v-else class="card-image"><img src="../assets/images/card-image.png" alt=""></div>
    <div class="card-content">
      <div class="card-content-title">
        <h3>{{travelData.Name}}</h3>
        <div class="open-time">
          <span>{{trimOpenTime}}</span>
        </div>
      </div>
      <div class="card-content-detail">
        <div class="pin"><img src="../assets/images/pin.png" alt=""></div>
        <p>{{travelData.Address}}</p>
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary moreInfo" data-bs-toggle="modal" data-bs-target="#exampleModal">
        了解更多
      </button>
      

    <!-- Modal -->
      <div v-show="true" class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>{{travelData.Description}}</p>
              <div v-if="travelData.Picture.PictureUrl1" class="card-image"><img :src="travelData.Picture.PictureUrl1" alt=""></div>
              <div v-else class="card-image"><img src="../assets/images/card-image.png" alt=""></div>
            </div>
            <div class="modal-footer">
              <div class="open-time">
                <div class="icon"><img src="" alt=""></div>
                <span>{{travelData.OpenTime}}</span>
              </div>
              <div class="admission">
                <div class="icon"><img src="" alt=""></div>
                <span>{{travelData.TicketInfo}}</span>
              </div>
              <div class="contact">
                <div class="icon"><img src="" alt=""></div>
                <span>{{travelData.Phone}}</span>
              </div>
              <div class="category">
                <div class="icon"><img src="" alt=""></div>
                <span>{{travelData.Class1}}</span>
              </div>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import Modal from 'bootstrap/js/dist/modal';
// // import 'bootstrap/dist/css/bootstrap.min.css'


export default {
  name: "Card",
  data() {
    return {
      // modal: null,
    }
  },
  props: {
    travelData: Object,
  },
  
  computed: {
    trimOpenTime() {
      if(!this.travelData.OpenTime) return
      if (this.travelData.OpenTime.length > 30) {
       return this.travelData.OpenTime
          .toString()
          .split('；')
          .filter(time => time.includes('Sun'))[0]
          .toString()
      }
      return this.travelData.OpenTime
    }
  },
  // methods: {
  //   showModal() {
  //     this.modal.show();
  //     console.log('DDD')
  //   },
  // },
  // mounted () {
  //   this.modal = new Modal(this.$refs.modal);
  // },
};
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
    border-color: typography.$primary-color;
  }

  .moreInfo {
    width: 60%;
  }
}
</style>