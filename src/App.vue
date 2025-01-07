<script>
import pageHead from './components/header.vue'
import pageFoot from './components/footer.vue'
export default {
  components: {
    pageHead,
    pageFoot
  }
}
</script>

<template>

  <page-head/>

  <div>
    <router-view></router-view>
  </div>

  <pageFoot/>

</template>

<style>





</style>
