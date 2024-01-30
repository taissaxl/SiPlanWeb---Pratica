<template>

  <div id="app">

    <AppHeader />

    <AppTable />

  </div>

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppTable from './components/AppTable.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppTable
  }
}
</script>

<style>

</style>
