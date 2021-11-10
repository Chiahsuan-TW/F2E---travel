<template>
  <div class="banner">
    <div class="banner-content">
      <h2>Welcome to Travel Taiwan</h2>
      
      <div class="select">
        <div class="dropdown category">
          <label @click="toggleShowCategory" for="">{{selectedCategory || '類別'}}</label>
          <label v-show="showCategory" v-for="(category, index) in categories" :key="index" :for="category">{{category}}</label>
          <input v-model="selectedCategory" v-for="(category, index) in categories" :key="index" :value="category" type="radio" :id="category" name="category">
        </div>
      </div>
      <div class="select">
        <div class="dropdown county">
          <label @click="toggleShowCounty" for="">{{selectedCounty || '所有縣市'}}</label>
          <label v-show="showCounty" v-for="(county, index) in counties" :key="index" :for="county">{{county}}</label>
          <input v-model="selectedCounty" v-for="(county, index) in counties" :key="index" :value="county" type="radio" :id="county" name="county">
        </div>
      </div>
      <input @submit.prevent="onSubmit" type="submit">
      
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  
  data() {
    return {
      categories: ["所有類別", "自然風景", "體育健身", "遊憩類", "古蹟類"],
      counties: ["基隆市", "嘉義市", "台北市", "嘉義縣", "新北市", "台南市", "桃園縣", "高雄市", "新竹市", "屏東縣", "新竹縣", "台東縣", "苗栗縣", "花蓮縣", "台中市", "宜蘭縣", "彰化縣", "澎湖縣", "南投縣", "金門縣", "雲林縣", "連江縣"],
      selectedCategory: "",
      selectedCounty: "",
      showCategory: false,
      showCounty: false,
    }
  },
  methods: {
    toggleShowCategory() {
      this.showCategory = !this.showCategory
    },
    toggleShowCounty() {
      this.showCounty = !this.showCounty
    },
    onSubmit() {
      console.log('TEST')
    }
  },

  watch: {
    selectedCategory: {
      handler: function() {
        this.toggleShowCategory()
      }
    },
    selectedCounty: {
      handler: function() {
        this.toggleShowCounty()
      }
    }
  }
}

</script>

<style lang="scss" scoped>
  @use '../assets/scss/typography.scss';

  .banner {
    position: relative;
    width: 100%;
    height: 75vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url('../assets/images/banner1.png');
    background-position: right;
    box-shadow: 7px 8px 22px rgba(111, 119, 137, 0.25);

    @media(min-width: 768px) {
      background-position: center center;
    }

    &-content {
      width: fit-content;
      position: absolute;
      top: 112px;
      left: 38px;
      width: 90%;
    }

    h2 {
      font-style: italic;
      font-weight: bold;
      font-size: 26px;
      color: #FFFFFF;
      text-shadow: 6px 8px 12px rgba(0, 0, 0, 0.49);
    }
  }

.select {
  display: inline-block;
  margin-right: 9px;
}

.dropdown {
    display: flex;
    flex-direction: column;
    width: 175px;
    background: #FFFFFF;
    box-shadow: 4px 4px 11px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    label {
      text-align: center;
      padding: 8px 0;
      font-size: 16px;
      color: typography.$dark-gray;

        &:first-child {
          background: url('../assets/images/triangle.png') no-repeat;
          background-position: right 20px center;
        }

        &:not(:first-child):hover {
        background-color: typography.$primary-color;
        color: #fff;
      }
    }

    

    input {
      display: none;
    }
  }



  .dropdown.category {
    width: 120px;
  }



</style>