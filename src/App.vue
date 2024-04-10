<template>

  <div id="app">

    <AppHeader />

    <AppTable />

    <AppTurmasCursos />

  </div>

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppTable from './components/AppTable.vue';
import AppTurmasCursos from './components/AppTurmasCursos.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppTable,
    AppTurmasCursos
  }
}
</script>

<style>

</style>
