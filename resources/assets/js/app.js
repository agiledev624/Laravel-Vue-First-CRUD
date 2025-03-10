/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue').default
import VueRouter from 'vue-router'
import CxltToastr from 'cxlt-vue2-toastr'

window.Vue.use(VueRouter)
window.Vue.use(CxltToastr, { position: 'bottom right' })

import CompaniesIndex from './components/companies/CompaniesIndex.vue'
import CourierPage from './components/companies/CourierPage.vue'
import LockersEdit from './components/companies/LockersEdit.vue'
import FirstScreen from './components/FirstScreen.vue'
import OwnerPage from './components/companies/OwnerPage.vue'
import LockerSetting from './components/companies/LockerSetting.vue'
import LockerList from './components/companies/LockerList.vue'
import ApartList from './components/companies/ApartList.vue'
import ApartmentSetting from './components/companies/ApartmentSetting.vue'
import ApartmentEdit from './components/companies/ApartmentEdit.vue'
import ThanksPage from './components/companies/ThanksPage.vue'

const routes = [
  {
    path: '/',
    components: {
      firstScreen: FirstScreen,
    },
  },
  { path: '/courier/:id', component: CourierPage, name: 'courierPage' },
  { path: '/thanks', component: ThanksPage, name: 'thanksPage' },
  {
    path: '/lockerlist',
    component: LockerList,
    name: 'lockerList',
  },
  {
    path: '/lockers/edit/:id',
    component: LockersEdit,
    name: 'editLocker',
  },
  {
    path: '/lockersetting',
    component: LockerSetting,
    name: 'lockerSetting',
  },
  {
    path: '/owner/:id',
    component: OwnerPage,
    name: 'ownerPage',
  },
  {
    path: '/apartsetting',
    component: ApartmentSetting,
    name: 'apartSetting',
  },
  {
    path: '/apartlist',
    component: ApartList,
    name: 'apartList',
  },
  {
    path: '/aparts/edit/:id',
    component: ApartmentEdit,
    name: 'editApartment',
  },
]

const router = new VueRouter({ routes })

const app = new Vue({ router }).$mount('#app')
