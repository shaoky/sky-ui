import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'

describe('button.vue', () => {
  expect([1, 2, 3, 4]).toContain(1)
  it('create', () => {
    const wrapper = mount(Button, {
      props: {
        type: 'primary'
      }
    })
    expect(wrapper.classes()).toContain('sky-button--primary')
  })
  it('loading', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true
      }
    })
    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.find('.sky-icon-loading').exists()).toBeTruthy()
  })
  it('size', () => {
    const wrapper = mount(Button, {
      props: {
        size: 'small'
      }
    })
    expect(wrapper.classes()).toContain('sky-button--small')
  })
  it('disabled', () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    expect(wrapper.classes()).toContain('is-disabled')
  })

})