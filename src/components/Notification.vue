<template>
      <div class="notification" :class="{animate: notification.show}">
          <div>
              <Loading v-if="notification.type === 'loading'" class="icon" />
              <Success v-else-if="notification.type === 'success'" class="icon" />
              <Error v-else-if="notification.type === 'error'" class="icon"/>
              <span>{{notification.message}}</span>
          </div>
      </div>
</template>

<script>
import Loading from '@/components/icons/Loading';
import Success from '@/components/icons/Success';
import Error from '@/components/icons/Error';

export default {
  name: 'Notification',
  components: {
    Loading,
    Success,
    Error
  },
  computed: {
      notification: function() {
        return this.$store.state.notifications.notification;
      }
  }
}
</script>

<style scoped lang="scss">
.notification {
    width: 100%;
    padding: 2rem;
    transition: transform 300ms;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    transform: translateY(-100%);
    box-shadow: .1rem .1rem .1rem .1rem rgba(0,0,0,0.2);
    background-color: $main_color;
    > div {
        display: flex;
        justify-content: space-around;
        @include max_site_width();
        align-items: center;
    }
    span {
        flex: 1 1 auto;
        @include font-opensans();
        font-size: 1.4rem;
    }
}
.icon {
    margin-right: 2rem;
    width: 3rem;
    height: 3rem;
}
.animate {
    transform: translateY(0);
}
</style>
