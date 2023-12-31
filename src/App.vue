<template>
 <div class="hero_area">
  <header-component />
  <slider-component />
 </div>

  <router-view/>
  <info-component />
  <footer-component />
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
import SliderComponent from './components/SliderComponent.vue'
import InfoComponent from './components/InfoComponent.vue'
export default{
  components: {
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    InfoComponent
  }
}
</script>

<style>
 @import url("./assets/css/style.css");
  @import url("./assets/css/responsive.css");
</style>
