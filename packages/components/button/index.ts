import Button from './src/button.vue'

Button.install = (app): void => {
  app.component(Button.name, Button)
}

export default Button
