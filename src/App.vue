<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


export default {
  components: {
    Navbar, Footer,
  },
  
}
</script>


<style lang="scss">



</style>
