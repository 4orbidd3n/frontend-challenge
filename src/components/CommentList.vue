<template>
    <div class="commentList">
        <ul class="content" v-if="comments.length > 0">
            <Comment
              v-for="item in comments"
              :comment="item"
              :key="item.id"
              class="comment"
            />
        </ul>
        <ul v-else class="content">
            <li class="comment empty">Nothing to show</li>
        </ul>
        <ImageButton class="add" @action="addComment" :image="'add-row.png'" />
    </div>
</template>

<script>
import Comment from '@/components/Comment.vue';
import ImageButton from '@/components/elements/ImageButton.vue';

export default {
    name: 'commentList',
    components: {
      Comment,
      ImageButton
    },
    created: function() {
      this.getComments();
    },
    computed: {
      comments () {
        return this.$store.state.comments.comments;
      }
    },
    methods: {
       getComments() {
         this.$store.dispatch('getComments')
       },
       addComment() {
         this.$store.dispatch('addComment')
       }
    }
}
</script>

<style scoped lang="scss">
.commentList {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.content {
    background-color: $main_color;
    border: 1px solid #000000;
    border-radius: 0.2rem;
    width: 100%;
}
.comment {
  border-bottom: 1px solid #000000;
  &.empty {
    padding: 2rem;
    @include font-montserrat(600);
    color: $title_color;
    font-size: 1.6rem;
  }
}

.comment:last-of-type {
  border-bottom: 0;
}

.add {
  margin: 2rem 0 0;
  width: 5rem;
  height: 5rem;
}
</style>
