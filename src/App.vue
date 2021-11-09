<template>
  <Navbar />
  <div id="nav">
    
  </div>
  <router-view />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


export default {
  components: {
    Navbar,
  }
}
</script>


<style lang="scss">



</style>
