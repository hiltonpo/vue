<template>
  <div id="tables">
    <ul>
      <li
        v-for="(seat, index) in $store.state.seats"
        @click="openModal(index)"
        :key="index"
      >
        <template v-if="!bookingData[index]"> 0 / {{ seat }}位 </template>
        <template v-else>
          <p>{{ bookingData[index].seats }} / {{ seat }}位</p>
          <p>{{ bookingData[index].name }} 先生 / 小姐</p>
        </template>
      </li>
    </ul>
  </div>
  <booking-modal
    v-if="bookingId != null"
    :bkid="bookingId"
    :bkdata="bookingData"
    @bkidisnull="closeModal"
  >
  </booking-modal>
</template>

<script>
import BookingModal from "./BookingModal.vue";

export default {
  name: "tables",
  components: {
    BookingModal,
  },
  data() {
    return {
      seats: [],
      bookingData: [],
      bookingId: null,



    };
  },
  props: {},
  methods: {
    closeModal(val) {
      this.bookingId = val;
    },


    openModal(index) {
      this.bookingId = index;

      if (!this.bookingData[index]) {
        console.log(this.bookingData[index]);
        this.bookingInfo = {
          name: null,
          phone: null,
          seats: null,
          time: null,
        };
      } else {
        this.bookingInfo = Object.assign({}, this.bookingData[this.bookingId]);
        console.log(this.bookingInfo);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tables ul {
  display: flex;
}

#tables li {
  list-style-type: none;
  border: 1px solid #ccc;
  padding: 14px 20px;
  margin-right: 15px;
}

#tables p {
  margin: 0;
  margin-bottom: 10px;
}
</style>
