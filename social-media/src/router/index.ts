import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/WelcomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: HomeView
    },
    {
      path: '/signup',
      name: 'signup',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SignUpView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    // NavBar
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/community',
      name: 'community',
      component: () => import('../views/CommunityView.vue')
    },
    {
      path: '/community/:communityId',
      name: 'communityId',
      component: () => import('../views/CommunitySingleView.vue')
    },
    {
      path: '/feed',
      name: 'feed',
      component: () => import('../views/FeedView.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddView.vue')
    },
    {
      path: '/add/article',
      name: 'addArticle',
      component: () => import('../views/AddArticleView.vue')
    },
    {
      path: '/add/image',
      name: 'addImage',
      component: () => import('../views/AddImageView.vue')
    },
    {
      path: '/add/video',
      name: 'addVideo',
      component: () => import('../views/AddVideoView.vue')
    },
    {
      path: '/trends',
      name: 'trends',
      component: () => import('../views/TrendsView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    // SideBar
    {
      path: '/messages',
      name: 'messages',
      component: () => import('../views/MessagesView.vue')
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/settings',
      name: 'setting',
      component: () => import('../views/SettingsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router;