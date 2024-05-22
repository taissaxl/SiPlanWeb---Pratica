<template>
  <div id="app">

    <AppHeader />

    <router-view v-if="isDisciplinasPage" />

    <AppTurmasCursos v-else />
    
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppTurmasCursos from './components/AppTurmasCursos.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppTurmasCursos
  },
  computed: {
    isDisciplinasPage() {
      return this.$route.path === '/disciplinas';
    }
  }
}
</script>

<style>

</style>
