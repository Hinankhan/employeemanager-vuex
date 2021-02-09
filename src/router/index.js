import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import EmployeeList from '../components/employeeList.vue'
import EmployeeCreate from '../components/employeeCreate.vue'
import EmployeeEdit from '../components/employeeEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'employeeList',
    component: EmployeeList
  },
  {
    path: '/employees/create/',
    name: 'employeescreate',
    component: EmployeeCreate
  },
  {
    path: '/employees/edit/:id',
    name: 'employeesedit',
    component: EmployeeEdit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
