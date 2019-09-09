<template>
    <div class="checkbox">
        <label>
            <input type="checkbox" @change="changeState">
            <div tabindex="0" @keydown="changeState" role="checkbox" :aria-checked="checked">
                <div v-if="!checked" class="icon"></div>
                <div v-else class="icon checked"></div>
            </div>
        </label>
    </div>
</template>

<script>
import {isValidKeydown} from '@/utils';

export default {
    name: 'Checkbox',
    props: {
      startState: Boolean
    },
    data: function() {
      return {
          checked: false,
      }
    },
    created: function() {
      this.checked = this.startState || false;
    },
    methods: {
      changeState: function(e) {
          if (isValidKeydown(e, "Enter"))
              this.checked = !this.checked;
      }
    }
}
</script>

<style scoped lang="scss">
    .checkbox {
      position: relative;
    }
    label {
        cursor: pointer;
    }
    input {
        visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }
    .icon {
        border: .2rem solid $accent_color;
        border-radius: 10%;
        width: 1.6rem;
        height: 1.6rem;
        &.checked {
            background-color: $accent_color;
            &:before {
                width: .2rem;
                height: .4rem;
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: calc(50% - .2rem);
                background-color: $main_color;
                transform: translate(-50%, -50%) rotate(135deg);
            }
            &:after {
                width: .2rem;
                height: .8rem;
                content: '';
                display: block;
                position: absolute;
                top: 50%;
                left: calc(50% + .2rem);
                background-color: $main_color;
                transform: translate(-50%, -50%) scaleX(-1) rotate(135deg);
            }
        }
    }
</style>
