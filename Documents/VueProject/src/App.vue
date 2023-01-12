<template>
  <div class="ho">
    <NavBar />
    <router-view />
  </div>
  
  <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: { NavBar, Footer },
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: black;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: white;
}

.ho {
  /* min-height: 100vh; */
  background-image: linear-gradient(black, black, rgb(36, 36, 36));
}
</style>
