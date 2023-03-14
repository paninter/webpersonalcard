<template>
  <div>
    <Navigation />
    <div>
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'
export default {
  // middleware: 'auth',
  // name: 'content',
  components: {
    Navigation,
    Footer,
  },
}
</script>
