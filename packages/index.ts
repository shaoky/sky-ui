import type { App } from 'vue'
export * from './utils/compute'
import SkyButton from './components/button'
const version = '1.0.0'

const components = [SkyButton]

const install = (app: App): void => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export { install, version, SkyButton }
export default {
  install,
  version,
}
