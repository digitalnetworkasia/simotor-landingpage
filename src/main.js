import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import BootstrapVue from 'bootstrap-vue'
import './assets/css/owl.carousel.min.css'
import 'bootstrap';
import './assets/css/app.scss'
import 'jquery'
import router from './router';
import VueCarousel from 'vue-carousel';
import './assets/css/style.css'
import './assets/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



library.add(faBuilding)
library.add(faPhone)
library.add(faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('building', faBuilding)
Vue.component('phone', faPhone)
Vue.component('envelope', faEnvelope)

Vue.use(BootstrapVue)
Vue.use(VueCarousel);
Vue.config.productionTip = false

// Vue.Component("alert", require('./components/Alert.vue').default)

new Vue({
  vuetify,
  router,
  faBuilding,
  faPhone,
  faEnvelope,

  render: h => h(App)
}).$mount('#app')
