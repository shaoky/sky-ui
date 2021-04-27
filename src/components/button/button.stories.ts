import { action } from '@storybook/addon-actions'

export default {
  title: 'Basis'
}

export const 按钮 = () => ({
  template: `
    <div>
      <h3>基础用法</h3>
      <Button>默认按钮</Button>
      <Button type="primary">主要按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
      <Button type="danger">危险按钮</Button>

      <h3>不同尺寸</h3>
      <Button size="large">大号</Button>
      <Button>默认按钮</Button>
      <Button size="small">小型</Button>
      <Button size="mini">迷你</Button>
      
      <h3>禁用状态</h3>
      <Button disabled>默认按钮</Button>
      <Button type="primary" disabled>默认按钮</Button>
      <Button type="success" disabled>成功按钮</Button>
      <Button type="warning" disabled>警告按钮</Button>
      <Button type="danger" disabled>危险按钮</Button>
      
      <h3>点击事件</h3>
      <Button type="danger" @onClick="click">危险按钮</Button>
    </div>
  `,
  methods: {
    click: action('click')
  }
})

