<template>
    <div ref="comment">
      <div
        v-if="!edit"
        class="text"
        @mouseenter="toggleEdit(true)"
        @mouseleave="toggleEdit(false)"
        tabindex="0"
        ref="comment-text"
        @focusin="toggleEdit(true)"
        @focusout="toggleEdit(false)"
        @aria-label="`Press enter to edit: ${text}`"
        @keydown="checkKeyboardEdit"
      >
          {{text}}
          <button
              type="button"
              v-if="showEdit"
              @click="startEdit"
              class="button button-edit"
              ref="comment-edit"
              tabindex="-1"
          >
            {{editText()}}
          </button>
      </div>
      <div v-else>
        <textarea v-model="newText" v-if="type === 'text'" class="textarea-edit" ref="edit-area">
            {{text}}
        </textarea>
        <input class="text-edit" v-else type="text" v-model="newText" value="text" ref="edit-area"/>
        <div class="buttons-in-edit">
            <button type="button" class="button button-confirm" @click="endEdit">ok</button>
            <button type="button" class="button button-cancel" @click="cancelEdit">cancel</button>
        </div>
      </div>
    </div>
</template>

<script>
import {isValidKeydown} from '@/utils';

export default {
  name: 'CommentText',
  props: {
    text: String,
    type: String,
    id: Number,
    defaultValue: {
      type: String,
      default: ''
    }
  },
  data: () => {
    return {
      newText: '',
      showEdit: false,
      isPreviousTargetEdit: false,
    }
  },
  computed: {
    edit() {
      const editInfo = this.$store.state.comments.editedCommentInfo;
      return editInfo.id === this.id && editInfo.type === this.type;
    },
  },
  methods: {
    editText() {
      return document.activeElement.isEqualNode(this.$refs['comment-text']) ? "Press enter or click here to edit" : "Edit"
    },
    toggleEdit: function(show) {
        this.showEdit = show;
    },
    checkKeyboardEdit: function(e) {
      if (isValidKeydown(e, "Enter", true)) {
          this.startEdit();
      }
    },
    startEdit: function() {
        this.$emit('start-comment-edit', this.type);
        this.newText = this.text;
        this.$nextTick(() => {
            this.$refs['edit-area'].focus();
        });
    },
    endEdit: function() {
      this.$emit('update-comment', this.newText || this.defaultValue);
      this.newText = '';
      this.$nextTick(() => {
          this.$refs['comment-text'].focus();
      });
    },
    cancelEdit: function() {
      this.$emit('end-comment-edit');
      this.newText = '';
      this.$nextTick(() => {
          this.$refs['comment-text'].focus();
      });
    },
  }
}
</script>

<style scoped lang="scss">
  .textarea-edit {
    width: 100%;
    border: 0;
    border-bottom: .2rem solid $accent_color;
    resize: none;
    height: 15rem;
  }
  .text {
    &:hover {
        +.access-edit {
          display: block;
          position: absolute;
          top: 0;
          left: 0;
        }
    }
  }
  .text-edit {
    width: 100%;
    border: 0;
    border-bottom: .2rem solid $accent_color;
  }
  .button {
      text-decoration: underline;
      color: $accent_color;
      margin-bottom: -.2rem;
      &:hover {
          text-decoration: none;
          color: $title_color;
      }
  }
  .buttons-in-edit {
    display: flex;
    button {
      margin-right: 1rem;
      &:last-child {
          margin-right: 0;
      }
    }
  }
</style>
