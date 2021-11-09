<template>
  <div class="card">
    <div class="card-image"><img src="../assets/images/card-image.png" alt=""></div>
    <div class="card-content">
      <div class="card-content-title">
        <h3>{{scenicSpot.Name}}</h3>
        <div class="open-time">
          <span>{{scenicSpot.OpenTime}}</span>
        </div>
      </div>
      <div class="card-content-detail">
        <div class="pin"><img src="../assets/images/pin.png" alt=""></div>
        <p>{{scenicSpot.Adress}}</p>
      </div>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary moreInfo" data-bs-toggle="modal" data-bs-target="#exampleModal">
        了解更多
      </button>

    <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
      </div>
    </div>
  </div>
</template>


<script>

export default {
  name: "Card",

  props: {
    scenicSpot: Object,
  },
  
  // data() {
  //   return {
  //     scenicSpot: {
  //       Name: "哈巴狗與睡美人岩",
  //       OpenTime: "全天候開放",
  //       PictureUrl1: "https://www.eastcoast-nsa.gov.tw/image/29064/640x480",
  //       Adress: "臺東縣951綠島鄉溫泉路167號",
  //       Description: "早期稱為柵口，後來更名為「柴口」，為綠島主要浮潛區之一。海岸地形以珊瑚裙礁為主體",
  //       TicketInfo: "免費",
  //       Phone: "886-8-9672026",
  //       Class1: "自然風景類",
  //     }
  //   }
  // }
};

</script>

<style lang="scss" scoped>
@use '../assets/scss/typography.scss';

  .card {
    width: 294px;
    height: 346px;
    box-shadow: 2px 2px 4px rgba(114, 142, 171, 0.1), -6px -6px 20px rgba(255, 255, 255, 0.6), 4px 4px 20px rgba(111, 140, 176, 0.41);
  
  &-image {
    height: 184px;

    img {
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