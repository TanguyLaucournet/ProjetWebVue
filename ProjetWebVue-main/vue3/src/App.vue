<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <AppHeader />
  <div class="w-full flex">
    <router-view></router-view>
  </div>
  <div class="footer">
    <div class="container">
      <div class="row">
        <h1 class="title" style="text-align:center">Contact Us</h1>
        <br>
        <div class="col-md">   
          <p>
            <a href="mailto:henry.faure-geors@edu.devinci.fr" >henry.faure-geors@edu.devinci.fr</a>
          </p>
        </div>
        <div class="col-md">
          <p>
            <a href="mailto:tanguy.laucournet@edu.devinci.fr">tanguy.laucournet@edu.devinci.fr</a>
          </p>
        </div>
        <div class="col-md">
          <p>
            <a href="Pierre-Louis.quandalle@edu.devinci.fr">Pierre-Louis.quandalle@edu.devinci.fr</a>
          </p>
      </div>
      <p style="text-align:center"><a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-twitter"></a>
          <a href="#" class="fa fa-instagram"></a></p>
      </div>
    </div>
  </div>

  
  
</template>

<script>
import AppHeader from "./components/AppHeader";



export default {
  mounted() {
    
  },
  components: { AppHeader},
};
</script>

<style></style>
