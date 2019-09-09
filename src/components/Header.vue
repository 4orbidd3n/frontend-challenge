<template>
  <header class="header">
      <div class="content">
          <h1>Transcriptions</h1>
          <div class="actions">
            <ImageButton @action="getComments" :image="'fetch-document.png'" class="button" />
            <ImageButton @action="uploadComments" :image="'upload.png'" class="button" />
          </div>
      </div>
  </header>
</template>

<script>
import ImageButton from '@/components/elements/ImageButton.vue';

export default {
  name: 'Header',
  components: {
    ImageButton
  },
  methods: {
      getComments: function() {
          this.$store.dispatch('getComments');
      },
      uploadComments: function() {
        this.$store.dispatch('uploadComments');
      }
  }
}
</script>

<style scoped lang="scss">
.header {
    background-color: $main_color;
    box-shadow: 0 0.2rem 0.3rem 0 rgba(0, 0, 0, 0.2);
}
.content {
  @include max_site_width;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 4rem;
}
.actions {
    display: flex;
    align-items: center;
    .button {
      margin-right: 2rem;
      width: 3rem;
      height: 3rem;
      &:last-child {
        margin-right: 0;
      }
    }
}
h1 {
    @include font-montserrat(500);
    color: $main_title_color;
    font-size: 1.8rem;
}
</style>
