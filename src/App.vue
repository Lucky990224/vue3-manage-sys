<script setup>
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="main-window">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.main-window {
    height: calc(100% - 50px);
    overflow: hidden;
}
</style>
