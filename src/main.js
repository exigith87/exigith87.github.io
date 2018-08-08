//use firebase
import './firebase';

import Vue from 'vue'
import App from './App.vue'

// import this to use firebase
import VueFire from 'vuefire'
//use for getting http request


import VueResource from 'vue-resource'
//use for route
import VueRouter from 'vue-router'


Vue.use(VueFire)


//use for importingthe routes.js file

import Routes from './routes'

Vue.use(VueResource);
Vue.use(VueRouter);

//use for instancing the route
const router= new VueRouter({

  routes: Routes
});


new Vue({
  el: '#app',
  render: h => h(App),

  //use for using the route instance above
  router:router
})
