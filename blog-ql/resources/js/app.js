
import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

import PostList from './PostList';
import Post from './Post';

window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path:'/',
        name:'index',
        component:PostList
    },
    {
        path:'/post/:id',
        name:'post',
        component:Post
    }
];

const router = new VueRouter({
    routes
})

const app = new Vue({
    el: '#app',
    router
});
