<template>
  <div id="create-table">
      <h2>table counts?</h2>
      <input type="number" v-model.number="tableCount">
  </div>
  <seats-setting :tbc="tableCount"></seats-setting>
</template>


<script>
import SeatsSetting from './SeatsSetting.vue'

export default {
  name: 'create-table',
  components: {
    SeatsSetting
  },
  data() {
    return {
      tableCount: null,

    };
  },
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
