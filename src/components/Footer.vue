<template>
  <footer>
    <div class="motto">
      <p>“To travel is to live” – Hans Christian Anderson-</p>
      <button @click="scrollToTop" class="scroll-to-top"><img src="@/assets/images/to-top.png" alt=""></button>
    </div>
    <div class="copyright">
      <p>CopyRight :  Travel Taiwan</p>
      <p>Design By :  Tracy</p>
    </div>
  </footer>
</template>


<script>
export default {
  name: "Footer",

  data() {
    return {
      

    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/typography.scss';

  .motto {
    position: relative;
    height: 352px;
    background-image: url('../assets/images/footer-mobile.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right 70%;

    @media(min-width: 992px) {
      background-image: url('../assets/images/footer-desktop.png');
    }

    p {
      width: 250px;
      height: 65px;
      font-size: 19px;
      color: #FFFFFF;
      font-weight: bold;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: auto;
    }

    .scroll-to-top {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 46px;
      height: 46px;
      position: absolute;
      right: 30px;
      bottom: 28px;
      border-radius: 50%;
      background: typography.$primary-color;
      box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    }
  }

  .copyright {
    padding: 55px;
    background-color: typography.$primary-color;


    p {
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      color: #FFFFFF;
    }
  }
</style>