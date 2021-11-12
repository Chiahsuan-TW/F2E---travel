<template>
  <header>
    <router-link :to="{name: 'Home'}" class="website-title">
      <div class="website-logo"><img src="../assets/images/logo.png" alt=""></div>
      <h1 class="website-name">Travel Taiwan</h1>
    </router-link>
    <nav>
      <router-link :to="{name: 'Home'}">首頁</router-link>
      <router-link :to="{name: 'ScenicTour'}">景點導覽</router-link>
      <router-link :to="{name: 'Events'}">觀光活動</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavBar",
};
</script>


<style lang="scss" scoped>
@use '../assets/scss/typography.scss';

  header {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0px 2px 11px rgba(111, 119, 137, 0.25);


    @media(min-width: 768px) {
      flex-direction: row;
    }
  }

  .website {
    &-title {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      gap: 13px;
      padding: 30px 0;
      box-shadow: 0px 2px 11px rgba(111, 119, 137, 0.25);

      @media(min-width: 768px) {
        padding: 0;
        width: unset;
        box-shadow: unset;
      }
    }
    &-logo {
      width: 40px;
      height: 40px;

      img {
        width: 100%;
        object-fit: contain;
      }
    }

    &-name {
      color: typography.$primary-color;
      font-style: italic;
      font-weight: 900;
      font-size: 20px;
    }
  }

  nav {
    padding: 30px 0;

    a {
      font-size: 16px;
      color: typography.$dark-gray;
    }
    a + a {
      margin-left: 57px;
    }
  }

  .active {
    color: typography.$primary-color;
    font-weight: bold;
  }
</style>

