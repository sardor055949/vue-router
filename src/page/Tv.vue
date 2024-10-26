<template>
  <main class="main">
    <div class="container main__tv">
      <router-link :to="/tv/ + item.id" class="main__tv-item" v-for="item in db" :key="item.id">
        <img :src="item.img" alt="">
        <h2 class="main__tv-title">{{ item.title }}</h2>
        <p class="main__tv-text">{{ item.text }}</p>
      </router-link>
    </div>
  </main>
</template>

<script>
import tv from '@/db'
export default {
data() {
  return {
    db: tv
  }
}
}
</script>

<style>

</style>