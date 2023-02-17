<template>
  <button
    class="sky-button"
    :class="[
      type ? 'sky-button--' + type : '',
      size ? 'sky-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
      },
    ]"
    :disabled="disabled"
  >
    <i v-if="loading" class="sky-icon-loading"></i>
    <span><slot></slot></span>
  </button>
</template>
<script lang="ts" setup>
import { isValidComponentSize } from '@sky/utils/validators'

// type ButtonTypes = "primary" | "success" | "warning" | "danger" | "default" | ''
defineProps({
  type: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: '',
    validator: isValidComponentSize,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})
</script>
