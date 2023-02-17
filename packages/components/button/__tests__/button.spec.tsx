import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'

import Button from '../src/button.vue'

describe('Button', () => {
  it('create', () => {
    const wrapper = mount(() => <Button type="primary" />)
    expect(wrapper.classes()).toContain('sky-button--primary')
  })

  it('size', () => {
    const wrapper = mount(() => <Button size="small" />)
    expect(wrapper.classes()).toContain('sky-button--small')
  })

  it('loading', () => {
    const wrapper = mount(() => <Button loading />)
    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.find('.sky-icon-loading').exists()).toBeTruthy()
  })

  it('disabled', () => {
    const wrapper = mount(() => <Button disabled />)
    expect(wrapper.classes()).toContain('is-disabled')
  })
})
