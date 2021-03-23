<template>
  <div id="booking-modal">
    <label> name <input v-model="bookingInfo.name" /> </label> <br />
    <label> phone <input v-model="bookingInfo.phone" /> </label> <br />
    <label> seats <input v-model="bookingInfo.seats" /> </label> <br />
    <label> time <input v-model="bookingInfo.time" /> </label> <br />
    <button class="booking" @click="booking">Booking</button>
    <button class="cancel" @click="closeModal">X</button>
  </div>
</template>

<script>
export default {
  name: "booking-modal",
  props: ['bkid', 'bkdata'],

  data() {
    return {
      bookingInfo: {
        name: null,
        phone: null,
        seats: null,
        time: null,
      },

      bkid1: this.bkid,
      bkdata1:this.bkdata,
    };
  },
  methods: {
    booking() {
      this.bkdata1[this.bkid1] = Object.assign({}, this.bookingInfo);
      this.closeModal();
    },
    closeModal() {
      this.$emit("bkidisnull", null);
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#booking-modal {
  position: fixed;
  border: 1px solid #ccc;
  padding: 30px 60px;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
}

#booking-modal label {
  display: inline-block;
  margin-bottom: 8px;
}

#booking-modal button.booking {
  width: 100%;
}

#booking-modal button.cancel {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
