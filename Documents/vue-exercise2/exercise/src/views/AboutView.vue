<template>
  <div class="home">
    <h1>This is an about page</h1>
    <About msg="Welcome to Your Vue.js App"/>
  </div>
</template>
<script>
import About from '@/components/About.vue'

export default {
  name: 'About',
  components: {
    About
  }
}
</script>
<style>

</style>