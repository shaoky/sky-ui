<template>
  <button
    class="sky-button"
    :class="[
      type ? 'sky-button--' + type : '',
      size ? 'sky-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading
      }
    ]"
    :disabled="disabled"
    @click="onClick"
  >
    <i v-if="loading" class="sky-icon-loading"></i>
    <span><slot></slot></span>
  </button>
</template>
<script lang="ts">
// import dayjs from 'dayjs'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { isValidComponentSize } from '@sky/utils/validators'
// import cloneDeep from 'lodash'


type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'default'

export default defineComponent({
  name: 'SkyButton',
  props: {
    type : {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    size: {
      type: String as PropType<ComponentSize>,
      default: 'medium',
      validator: isValidComponentSize
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    // const a = cloneDeep('1')
    // console.log(a)
    // console.log(dayjs())
  }
})
</script>
