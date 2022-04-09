/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue').default
import VueRouter from 'vue-router'
import CxltToastr from 'cxlt-vue2-toastr'

import Popover from 'vue-js-popover'
import VModal from 'vue-js-modal'
// import 'vue-js-modal/dist/styles.css'

window.Vue.use(VueRouter)
window.Vue.use(CxltToastr, { position: 'bottom right' })
window.Vue.use(VModal, { dialog: true })
// window.Vue.use(Popover)
import CompaniesIndex from './components/companies/CompaniesIndex.vue'
import CourierPage from './components/companies/CourierPage.vue'
import FoyerAccess from './components/companies/FoyerAccess.vue'
import LockersEdit from './components/admin/LockersEdit.vue'
import FirstScreen from './components/FirstScreen.vue'
import OwnerPage from './components/companies/OwnerPage.vue'
import LockerSetting from './components/admin/LockerSetting.vue'
import LockerList from './components/admin/LockerList.vue'
import ApartList from './components/admin/ApartList.vue'
import ApartmentSetting from './components/admin/ApartmentSetting.vue'
import ApartmentEdit from './components/admin/ApartmentEdit.vue'
import ThanksPage from './components/companies/ThanksPage.vue'
import UserList from './components/admin/UserList.vue'
import Status from './components/admin/Status.vue'
import Vue from 'vue'

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
  {
    path: '/userlist',
    component: UserList,
    name: 'userList',
  },
  {
    path: '/status',
    component: Status,
    name: 'status',
  },
  {
    path: '/foyer/:id',
    component: FoyerAccess,
    name: 'foyerAccess',
  },
]

const router = new VueRouter({ mode: 'history', routes })

Vue.mixin({
  methods: {
    parsePhone: function(phone) {
      const pattern = /(\(|\)| )/g
      let trimmed = phone.replace(pattern, '')
      const regex = new RegExp('^0+(?!$)', 'g')

      // Replaces the matched
      // value with given string
      return '+61' + trimmed.replaceAll(regex, '')
    },
  },
})
const app = new Vue({
  router,
}).$mount('#app')
