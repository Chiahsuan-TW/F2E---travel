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
          <label @click="toggleShowCounty" for="">{{selectedCounty.name || '所有縣市'}}</label>
          <label v-show="showCounty" v-for="(county, index) in counties" :key="index" :for="county.name">{{county.name}}</label>
          <input v-model="selectedCounty" v-for="(county, index) in counties" :key="index" :value="county" type="radio" :id="county.name" name="county">
        </div>
      </div>
      <input @click.prevent="onSubmit" type="submit">
      
    </div>
  </div>
</template>

<script>

export default {
  name: "Swiper",
  
  data() {
    return {
      selectedCategory: "",
      selectedCounty: {},
      showCategory: false,
      showCounty: false,
    }
  },
  computed: {
    categories() {
      return ["所有類別", "自然風景", "體育健身", "遊憩類", "古蹟類"]
    },
    counties() {
      return [
        {name: "基隆市", keyword: "Keelung"},
        {name: "嘉義市", keyword: "Chiayi"},
        {name: "台北市", keyword: "Taipei"},
        {name: "嘉義縣", keyword: "ChiayiCounty"},
        {name: "新北市", keyword: "NewTaipei"},
        {name: "台南市", keyword: "Tainan"},
        {name: "高雄市", keyword: "Kaohsiung"},
        {name: "新竹市", keyword: "Hsinchu"},
        {name: "台東縣", keyword: "TaitungCounty"},
        {name: "苗栗縣", keyword: "MiaoliCounty"},
        {name: "花蓮縣", keyword: "HualienCounty"},
        {name: "台中市", keyword: "Taichung"},
        {name: "宜蘭縣", keyword: "YilanCounty"},
        {name: "彰化縣", keyword: "ChanghuaCounty"},
        {name: "澎湖縣", keyword: "PenghuCounty"},
        {name: "南投縣", keyword: "NantouCounty"},
        {name: "金門縣", keyword: "KinmenCounty"},
        {name: "雲林縣", keyword: "YunlinCounty"},
        {name: "連江縣", keyword: "LienchiangCounty"},
      ]
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
      this.$emit('on-submit', this.selectedCounty.keyword)
    },
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
      },
      deep: true,
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
          background-position: right 10px center;
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