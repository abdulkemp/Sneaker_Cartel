<template>
  <div>
    <div class="home">
      <img alt="Vue logo" class="pfp animate__animated animate__backInDown" src="../assets/pfp.jpg">
    </div>
    <div class="home">
      <div class="hehe animate__animated animate__backInUp">Abdul-Azeez Kemp</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'Home',
  components: {
    Home
  }
}
</script>

<style>
.pfp {
  border-radius: 100%;
  width: 300px;
}

.hehe {
  font-size: 10vw;
  color: white;
  text-shadow: 0 0 5px, 0 0 25px, 0 0 50px;
  min-height: 20vh;
  min-width: 20vh;
}

</style>
