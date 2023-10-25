import sizeOb from './size-ob'
import backTop from './back-top'

const directives = {
  'size-ob': sizeOb,
  'back-top': backTop
}

export default {
  install(app) {
    Object.keys(directives).forEach((key) => {
      app.directive(key, directives[key])
    })
  }
}
