<template>
  <main class="main">
    <div class="container">
        <div class="main__tv">
          <div class="main__tv-item">
            <img :src="getTv.img" alt="">
            <h2>{{ getTv.title }}</h2>
            <p>{{ getTv.text }}</p>
            <router-link to="/tv">back to tv</router-link>
          </div>
        </div>
    </div>
  </main>
</template>

<script>
import db from "@/db"
export default {
data() {
  return {
    tv: db,
    currentId: null
  }
},
created() {
  this.currentId = this.$route.params.id
},
computed: {
  getTv() {
    return this.tv.find(tele => tele.id == this.currentId)
  }
 }
}
</script>

<style>

</style>