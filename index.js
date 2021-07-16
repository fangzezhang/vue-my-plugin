export default {
  install: function (Vue, options) {
    Vue.prototype.$myDate = function (date, format='YYYY-MM-DD') {
      return 'test';
    }
  }
}
