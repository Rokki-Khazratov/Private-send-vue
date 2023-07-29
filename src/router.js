import { createRouter, createWebHistory } from 'vue-router'; 
import Home from './views/Home.vue';
import Create from './views/Create.vue';
import Message from './views/Message.vue';
import Content from './views/Content.vue';

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
