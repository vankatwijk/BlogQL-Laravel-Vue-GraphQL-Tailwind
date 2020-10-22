
import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'index',
        component:{}
    },
    {
        path:'/post/:id',
        name:'post',
        component:{}
    }
];

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
});
