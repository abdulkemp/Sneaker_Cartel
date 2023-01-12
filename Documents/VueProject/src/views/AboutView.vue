<template>
  <div class="container-3">
    <h1 class="abt animate__animated animate__backInDown">About Me</h1>
    <div class="about">
      <img src="../assets/pfp.jpg" class="animate__animated animate__backInLeft" alt="" />
      <div class="about-text animate__animated animate__backInRight">
        <h5>Developer & Designer</h5>
        <p>
          I, Abdul-Azeez Kemp, am a hardworking individual that is also constantly wanting to learn new things. What got
          me into wanting to start a career in IT was that how things are made and that always fascinates me and I would
          like to create things myself.
        </p>
        <button type="button" onclick="window.location.href='#form-1'"> Let's Talk</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>

<style scoped>
main {
  height: 100vh;
}

.about-text {
  width: 550px;
}

.about {
  width: 1130px;
  max-width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.about-text h2 {
  color: red;
  font-size: 75px;
  text-transform: capitalize;
  margin-bottom: 20px;
}

.about-text p {
  color: white;
}

.about-text h5 {
  color: white;
  font-size: 40px;
}

.container-3 button {
  background-color: red;
  border-radius: 20px;
  color: white;
}

.container-3 button:hover {
  background-color: transparent;
}

.container-3 {
  width: 100%;
  padding: 100px 0px;
}

.container-3 img {
  height: 430px;
  width: 430px;
  margin: 10px;
  border-radius: 10px;
}

.abt {
  font-size: 10vw;
  color: white;
  text-shadow: 0 0 5px, 0 0 25px, 0 0 50px;
}
</style>