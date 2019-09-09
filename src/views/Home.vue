<template>
  <div class="home">
    <Header />
    <div class="content">
        <CommentList />
    </div>
  </div>
</template>

<script>
import CommentList from '@/components/CommentList.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    CommentList,
    Header
  }
}
</script>

<style scoped lang="scss">
  .content {
      max-width: 80rem;
      width: 100%;
      margin: 0 auto;
      padding: 2rem;
  }
</style>
