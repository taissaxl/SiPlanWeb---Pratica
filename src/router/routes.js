import Vue from 'vue'
import VueRouter from 'vue-router'

import AppTable from './../components/AppTable.vue'
import AppTurmasCursos from './../components/AppTurmasCursos.vue'

Vue.use(VueRouter)

export default new VueRouter ({
    linkExactActiveClass: 'link-active',
    routes: [
      {
        path: '/disciplinas',
        component: AppTable
      },
      {
        path: '/tumascursos',
        component: AppTurmasCursos
      }
    ]
})