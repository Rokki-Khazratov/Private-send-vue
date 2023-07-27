import { createRouter, createWebHistory } from 'vue-router'; 
import Home from './components/Home.vue';
import Create from './components/Create.vue';
import Message from './components/Message.vue';
import Content from './components/Content.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/create/',
      component: Create,
    },
    {
      path: '/message/:slug',
      component: Message,
    },
    {
      path: '/content/:slug',
      component: Content,
    },
    
  ],
});
