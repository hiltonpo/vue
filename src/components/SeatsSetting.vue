<template>
  <div id="seats-settings" v-if="tbc">
      <h2>Seats Settings</h2>
      <ul>
          <li v-for="n in tbc" :key="n">
            {{ n }} / <input type="number" v-model.number="$store.state.seats[n-1]">
    
          </li>
      </ul>
      <button @click="createTable">Create Tables</button>
  </div>
</template>

<script>
export default {
  name: 'seats-setting',
  props: ['tbc'],
  methods: {
    createTable() {
      this.$store.commit('createTable');

    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#seats-settings li {
    margin-bottom: 6px;

}
</style>
