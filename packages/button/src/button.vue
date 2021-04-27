<template>
  <div
    class="sky-button"
    :class="[
      type ? 'sky-button--' + type : '',
      size ? 'sky-button--' + size : ''
    ]"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts">
import dayjs from 'dayjs'
import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { isValidComponentSize } from '@sky/utils/validators'
import cloneDeep from 'lodash'


type ButtonType = 'primary' | 'success' | 'default'

export default defineComponent({
  name: 'SkyButton',
  props: {
    type : {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    size: {
      type: String as PropType<ComponentSize>,
      validator: isValidComponentSize
    }
  },
  setup() {
    const a = cloneDeep('1')
    console.log(a)
    console.log(dayjs())
  }
})
</script>
