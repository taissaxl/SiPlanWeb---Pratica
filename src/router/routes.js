import Vue from 'vue'
import VueRouter from 'vue-router'

import Disciplinas from './../components/AppTable.vue'
import TurmasCursos from './../components/AppTurmasCursos.vue'

Vue.use(VueRouter)

export default new VueRouter ({
    linkExactActiveClass: 'link-active',
    routes: [{
        path: '/disciplinas',
        component: Disciplinas        
    }, {
        path: '/tumascursos',
        component: TurmasCursos
    }]
})