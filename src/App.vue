<template>
  <div id="app">
    <Notification />
    <router-view class="main"/>
    <div :class="{loading: isLoadingNotification}"></div>
  </div>
</template>

<script>
import Notification from '@/components/Notification.vue';
export default {
  components: {
      Notification
  },
  computed: {
    isLoadingNotification: function() {
        return this.$store.state.notifications.notification.show ? this.$store.state.notifications.notification.type === 'loading' || false : false;
    }
  }
}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
}
.main {
  background-color: $background_color;
  min-height: 100%;
}
</style>
