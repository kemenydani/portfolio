import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
Vue.use(Vuetify, {
    theme: {
        primary: '#4F5D75',
        secondary: '#EF8354',
        accent: '#2D3142',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
