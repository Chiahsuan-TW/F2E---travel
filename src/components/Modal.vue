<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{{travelData.Name}}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>{{travelData.Description}}</p>
              <div v-if="travelData.Picture" class="modal-image"><img :src="travelData.Picture.PictureUrl1" alt=""></div>
              <div v-else class="card-image"><img src="../assets/images/card-image.png" alt=""></div>
            </div>
            <div class="modal-footer">
              <div class="open-time">
                <div class="icon"><img :src="images.clock" alt=""></div>
                <span>{{travelData.OpenTime}}</span>
              </div>
              <div class="admission">
                <div class="icon"><img :src="images.ticket" alt=""></div>
                <span>{{travelData.TicketInfo}}</span>
              </div>
              <div class="contact">
                <div class="icon"><img :src="images.phone" alt=""></div>
                <span>{{travelData.Phone}}</span>
              </div>
              <div class="category">
                <div class="icon"><img :src="images.category" alt=""></div>
                <span>{{travelData.Class1}}</span>
              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    travelData: Object,
  },
  data() {
    return {
      images: {
        clock: require("@/assets/images/clock.png"),
        ticket: require("@/assets/images/ticket.png"),
        phone: require("@/assets/images/phone.png"),
        category: require("@/assets/images/category.png"),
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/typography.scss';

  .modal {
    right: 0;
    left: 0;
    margin: auto;
    width: 296px;

    &-body {
      p {
        color: typography.$dark-gray;
      }
    }

    &-image {
      width: 100%;

      img {
        width: 100%;

      }
    }

    &-footer {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      > div {
        display: flex;
        gap: 10px;
      }

      span {
        color: typography.$primary-color;
      }
    }
  }
</style>
