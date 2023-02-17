import SkyButton from '@sky/components/button'
import '@sky/sass/src/index.scss'
import './button.scss'

export default {
  title: 'Button',
  component: SkyButton,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['large', 'default', 'small'],
    },
    type: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger'],
    },
  },
}

const Template = (args) => ({
  components: { SkyButton },
  setup() {
    return { args }
  },
  template: '<sky-button v-bind="args">{{args.label}}</sky-button>',
})

export const 选择模式 = Template.bind({})
选择模式.args = {
  type: '',
  label: 'default',
  disabled: false,
  loading: false,
  size: '',
}

export const 展示模式 = () => ({
  components: { SkyButton },
  template: `<div class="storybook">
    <p>类型</p>
    <sky-button>default</sky-button>
    <sky-button type="primary">primary</sky-button>
    <sky-button type="success">success</sky-button>
    <sky-button type="warning">warning</sky-button>
    <sky-button type="danger">danger</sky-button>
    <p>尺寸</p>
    <sky-button size="large">large</sky-button>
    <sky-button>default</sky-button>
    <sky-button size="small">small</sky-button>
    <p>加载中</p>
    <sky-button type="primary" loading>loading</sky-button>
  </div>`,
})
