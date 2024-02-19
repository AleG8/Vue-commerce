<template>
  <main>
    <AppNavBar/>
    <RouterView :key="$route.path"/>
    <AppFooter />
  </main>
</template>
<script setup>
import AppNavBar from '@/components/AppNavBar.vue';
import AppFooter from './components/AppFooter.vue';
</script>


<style scoped>

main{
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 5rem;
}

.car-shop{
  margin: 3rem auto;
}
</style>
