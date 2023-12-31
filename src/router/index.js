import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import("../views/AboutView.vue")
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import("../views/ContactView.vue")
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import("../views/ProtfolioView.vue")
  },
  {
    path: '/service',
    name: 'service',
    component: () => import("../views/services/ServicesView.vue")
  },
  {
    path: '/service/add',
    name: 'addservice',
    component: () => import("../views/services/AddServiceView.vue")
  },
  {
    path: '/service/single',
    name: 'singleservice',
    component: () => import("../views/services/SingleServiceView.vue"),
    props: true
  },
  {
    path: '/service/update',
    name: 'updateservice',
    component: () => import("../views/services/UpdateServiceView.vue"),
    props: true
  },
  {
    path: '/customer',
    name: 'customer',
    component: () => import("../views/customers/CustomersView.vue")
  },
  {
    path: '/customer/add',
    name: 'addcustomer',
    component: () => import("../views/customers/AddCustomerView.vue")
  },
  {
    path: '/customer/single',
    name: 'singlecustomer',
    component: () => import("../views/customers/SingleCustomerView.vue"),
    props: true
  },
  {
    path: '/customer/update',
    name: 'updatecustomer',
    component: () => import("../views/customers/UpdateCustomerView.vue"),
    props: true
  },
  {
    path: '/developer',
    name: 'developer',
    component: () => import("../views/developers/DevelopersView.vue")
  },
  {
    path: '/developer/add',
    name: 'adddeveloper',
    component: () => import("../views/developers/AddDeveloperView.vue")
  },
  {
    path: '/developer/single:id',
    name: 'singledeveloper',
    component: () => import("../views/developers/SingleDeveloperView.vue"),
    props: true
  },
  {
    path: '/developer/update',
    name: 'updatedeveloper',
    component: () => import("../views/developers/UpdateDeveloperView.vue"),
    props: true
  },
  {
    path: '/language',
    name: 'language',
    component: () => import("../views/programinglanguages/LanguagesView.vue")
  },
  {
    path: '/language/add',
    name: 'addlanguage',
    component: () => import("../views/programinglanguages/AddLanguageView.vue")
  },
  {
    path: '/language/single',
    name: 'singlelanguage',
    component: () => import("../views/programinglanguages/SingleLanguageeView.vue"),
    props: true
  },
  {
    path: '/language/update',
    name: 'updatelanguage',
    component: () => import("../views/programinglanguages/UpdateLanguageView.vue"),
    props: true
  },
  {
    path: '/:catchAll(.*)',
    component: () => import("../views/NotFoundView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
