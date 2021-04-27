<template>
  <div
    class="button"
    :class="[
      type ? 'button--' + type : '',
      size ? 'button--' + size : '',
      {
        'is-disabled': disabled === ''
      }
    ]"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Emit } from 'vue-property-decorator'
import { ButtonType, ButtonSize } from '../../types/button.d'
@Component
export default class Button extends Vue {
  @Prop() readonly type?: ButtonType
  @Prop() readonly size?: ButtonSize
  @Prop() readonly disabled?: boolean

  @Emit('onClick')
  public onClick() {
    return 'click'
  }
}
</script>

<style lang="less" scoped>
.button {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #dcdfe6;
  line-height: 2em;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  // 尺寸
  &--large {
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
  }
  &--small {
    padding: 9px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  &--mini {
    padding: 7px 15px;
    font-size: 12px;
    border-radius: 3px;
  }
  // 颜色
  &--primary {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
  &--success {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
  &--warning {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
  &--danger {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
  // 禁用
  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>
