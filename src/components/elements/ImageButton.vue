<template>
    <button @click="$emit('action')" class="button">
        <Picture :image="image" class="button-img" />
    </button>
</template>

<script>
import Picture from '@/components/elements/Picture.vue';

export default {
    name: 'ImageButton',
    components: {
      Picture
    },
    props: {
      image: {
        type: String,
        required: true
      }
    }
}
</script>

<style scoped lang="scss">
.button {
  width: 100%;
  height: 100%;
  padding: 0;
}
.button-img {
    @include button-hover;
}
</style>
