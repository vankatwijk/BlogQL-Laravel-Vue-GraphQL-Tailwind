
import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

window.Vue = Vue;
Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
});
