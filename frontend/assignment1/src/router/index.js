import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import NavBar from '@/components/NavBar'
import NewContacts from '@/components/NewContacts'
import EditContacts from '@/components/EditContacts'
import ListContacts from '@/components/ListContacts'
import NewUsers from '@/components/NewUsers'
import Logout from '@/components/Logout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/newContact',
      name: 'NewContacts',
      component: NewContacts
    },
    {
      path: '/editContact/:contactid',
      name: 'EditContacts',
      component: EditContacts
    },
    {
      path: '/listContacts',
      name: 'ListContacts',
      component: ListContacts
    },
    {
      path: '/newUsers',
      name: 'NewUsers',
      component: NewUsers
    }
  ]
})
