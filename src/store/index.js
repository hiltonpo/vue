import { createStore } from 'vuex'

export default createStore({
  state: {
    seats: [],
    isTableCreated: false,


    

  },
  mutations: {
    createTable(state) {
      state.isTableCreated = true;
    },
    // recordBookingId(state, id) {
    //   state.bookingId = id;
    // },
    // clearBookingId(state) {
    //   state.bookingId = null;
    // },
    // clearBookingInfo(state) {
    //   state.bookingInfo = {
    //     name: null,
    //     phone: null,
    //     seats: null,
    //     time: null,
    //   };
    // },

    // loadBookingInfo(state) {
    //   state.bookingInfo = Object.assign({}, state.bookingData[state.bookingId]);

    // },
    // booking(state) {
    //   state.bookingData[state.bookingId] = Object.assign({}, state.bookingInfo);

    // },

    
  },
  actions: {
  },
  modules: {
  }
})
