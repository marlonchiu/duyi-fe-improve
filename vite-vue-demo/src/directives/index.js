import SizeOb from './sizeDirect'

const directives = {
  SizeOb
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
