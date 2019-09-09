<template>
  <div class="comment"">
    <Checkbox class="checkbox"/>
    <Picture :image="'person.png'" class="avatar"/>
    <CommentText
        :type="'voice'"
        :text="comment.voice"
        :id="comment.id"
        :defaultValue="defaultCommentTitle"
        class="title"
        @start-comment-edit="startCommentEdit"
        @update-comment="updateComment"
        @end-comment-edit="cancelCommentEdit"
    />
    <CommentText
        :type="'text'"
        :text="comment.text"
        :id="comment.id"
        class="text"
        :defaultValue="defaultCommentText"
        @start-comment-edit="startCommentEdit"
        @update-comment="updateComment"
        @end-comment-edit="cancelCommentEdit"
    />
    <ImageButton class="delete" @action="deleteComment"  :image="'delete.png'" />
  </div>
</template>

<script>
import CommentText from '@/components/CommentText.vue';
import Checkbox from '@/components/elements/Checkbox.vue';
import Picture from '@/components/elements/Picture.vue';
import ImageButton from '@/components/elements/ImageButton.vue';

import {
  DEFAULT_COMMENT_TITLE,
  DEFAULT_COMMENT_TEXT
} from '@/utils/strings'

export default {
    name: 'Comment',
    props: ['comment'],
    components: {
      CommentText,
      Checkbox,
      Picture,
      ImageButton
    },
    data: function() {
      return {
        defaultCommentTitle: DEFAULT_COMMENT_TITLE,
        defaultCommentText: DEFAULT_COMMENT_TEXT,
      }
    },
    methods: {
        startCommentEdit(type) {
            this.$store.dispatch('startCommentEdit', {id: this.comment.id, type});
        },
        updateComment(data) {
            this.$store.dispatch('updateComment', {id: this.comment.id, data});
        },
       cancelCommentEdit() {
            this.$store.dispatch('cancelCommentEdit');
       },
       deleteComment() {
          this.$store.dispatch('deleteComment', {id: this.comment.id});
       }
    }
}
</script>

<style scoped lang="scss">
.comment {
    padding: 2rem;
    display: grid;
    justify-content: stretch;
    grid-template-columns: 1.6rem 4rem auto 2rem;
    grid-template-rows: auto auto;
    grid-template-areas: "checkbox avatar title delete"
    ". . text .";
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
}
.checkbox {
  grid-area: checkbox;
  justify-self: center;
  align-self: center;
}
.avatar {
  grid-area: avatar;
  justify-self: center;
  align-self: center;
}
.delete {
    grid-area: delete;
    justify-self: end;
    align-self: start;
    height: auto;
}
.title {
    @include font-montserrat(600);
    color: $title_color;
    font-size: 1.6rem;
    grid-area: title;
    align-self: center;
}
.text {
    @include font-opensans();
    color: $title_color;
    font-size: 1.6rem;
    grid-area: text;
}
</style>
