/**
 * @Date:   2020-03-26T17:40:34+00:00
 * @Last modified time: 2020-04-06T20:36:54+01:00
 */



import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index'
import Example from './components/Example'

import CoursesIndex from './views/courses/Index'
import CoursesEdit from './views/courses/Edit'
import CoursesCreate from './views/courses/Create'

import LecturersIndex from './views/lecturers/Index'
import LecturersEdit from './views/lecturers/Edit'
import LecturersCreate from './views/lecturers/Create'

 import EnrolmentsIndex from './views/enrolments/Index'
 import EnrolmentsEdit from './views/enrolments/Edit'
 import EnrolmentsCreate from './views/enrolments/Create'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/example',
      name: 'example',
      component: Example
    },
    {
      path: '/courses',
      name: 'coursesIndex',
      component: CoursesIndex
    },
    {
      path: '/courses/edit/:id',
      name: 'coursesEdit',
      component: CoursesEdit
    },

    {
      path: '/courses/create',
      name: 'coursesCreate',
      component: CoursesCreate
    },

    {
      path: '/lecturers',
      name: 'lecturersIndex',
      component:LecturersIndex
    },

    {
      path: '/lecturers/edit/:id',
      name: 'lecturersEdit',
      component:LecturersEdit
    },

    {
      path: '/lecturers/create',
      name: 'lecturersCreate',
      component:LecturersCreate
    },

    {
      path: '/enrolments',
      name: 'enrolmentsIndex',
      component:EnrolmentsIndex
    },

    {
      path: '/enrolments/edit/:id',
      name: 'enrolmentsEdit',
      component:EnrolmentsEdit
    },

    {
      path: '/enrolments/create',
      name: 'enrolmentsCreate',
      component:EnrolmentsCreate
    },

  ]
})
