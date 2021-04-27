// import type { App } from 'vue'
import SkyButton from '@sky/button'
// import SkyButton from '../button'
// import SkyTest from '../test'
const version = '1.0.0'

// function install(app: App) {
//   const components = [SkyButton]
//   // const components = [SkyButton, SkyTest]
//   console.log(1)
//   console.log(SkyButton)
//   components.forEach(component => {
//     app.component(component.name, component)
//     // if (item.install) {
//     //   Vue.use(item as any)
//     // } else if (item.name) {
//     //   Vue.component(item.name, item)
//     // }
//   })
// }
const comonents = [
  SkyButton
]
const install = (app: any): void => {
  comonents.forEach(component => {
    app.component(component.name, component)
  });
}
// if (typeof window !== 'undefined' && window.Vue) {
//   console.log(window.Vue)
//   install(window.Vue)
// }
export { install, version, SkyButton }
// export { install, version, SkyButton }
export default {
  install,
  version: version
}
