require('./bootstrap');

window.Vue = require('vue');

import vuetify from './plugins/vuetify' // path to vuetify export


const files = require.context('./', true, /\.vue$/i)
files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))


const app = new Vue({
    vuetify,
    el: '#app',
});
