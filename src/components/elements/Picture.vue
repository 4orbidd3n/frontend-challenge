<template>
    <picture v-if="imageType !='svg'">
        <source media="(min-width: 650px)" :srcset="imageSizeName(2)">
        <source media="(min-width: 465px)" :srcset="imageSizeName(1)">
        <img :src="this.image" :alt="imageName" class="size">
    </picture>
    <img v-else :src="imageSizeName()" class="size">
</template>

<script>
export default {
    name: 'Picure',
    props: {
      image: {
        type: String,
        required: true
      }
    },
    computed: {
      imageName: function() {
          return this.image.split('.')[0];
      },
      imageType: function() {
          const getImgType = this.image.split('.');
          return getImgType[getImgType.length -1];
      }
    },
    methods: {
        imageSizeName(sizeValue) {
            const imgPath = sizeValue ? `${this.imageName.concat(`@${sizeValue}x`)}.${this.imageType}` : `${this.imageName}.${this.imageType}`;
            return require(`@/assets/img/${imgPath}`);
        }
    }
}
</script>

<style scoped lang="scss">
.size {
  width: 100%;
  height: auto;
}
</style>
