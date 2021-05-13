// import MyButton from './Button.vue'
import SkyButton from '../../packages/button/src/button.vue'
import '../../lib/css/index.css'
export default {
  title: 'Example/Button',
  component: SkyButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'mini']
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'success', 'warning', 'danger']
      }
    }
  }
}

const Template = args => ({
  components: { SkyButton },
  setup() {
    return { args }
  },
  template: '<sky-button v-bind="args">{{args.label}}</sky-button>'
})

export const Primary = Template.bind({})
Primary.args = {
  type: 'default',
  label: '默认按钮',
  disabled: false,
  loading: false
}
