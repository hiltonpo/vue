<template>
  <h1>Booking System</h1>
  <template v-if="!$store.state.isTableCreated">
    <create-table></create-table>
  </template>
  <tables v-if="$store.state.isTableCreated"></tables>  
</template>

<script>
import CreateTable from './components/CreateTable.vue'
import Tables from './components/Tables.vue'

export default {
  name: 'App',
  components: {
    CreateTable,
    Tables,
  },
}
</script>

<style>
#app {
    text-align: center;
}

ul {
    list-style-type: none;
    padding-left: 0;
}
</style>
