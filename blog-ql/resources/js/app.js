
import './bootstrap';
import Vue from 'vue';
import VueRouter from 'vue-router';

import PostList from './PostList';
import Post from './Post';

import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo';

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(VueApollo);

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
const apolloClient = new ApolloClient({
    uri: 'http://127.0.0.1:8000/graphql'
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

const router = new VueRouter({
    mode:'history',
    routes
})

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
