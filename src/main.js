// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'
import router from './router'
import AppDate from '@/components/AppDate'
import store from './store/index'

Vue.component('AppDate', AppDate)


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyC4deZsicr434GP3RKjRt2mrAUh42Kck9Y",
  authDomain: "awesome-vue-forum.firebaseapp.com",
  databaseURL: "https://awesome-vue-forum.firebaseio.com",
  projectId: "awesome-vue-forum",
  storageBucket: "awesome-vue-forum.appspot.com",
  messagingSenderId: "588423112979",
  appId: "1:588423112979:web:2a81ee8018a6f7d10712e6",
  measurementId: "G-YEJSVLWBN6"
}

firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
