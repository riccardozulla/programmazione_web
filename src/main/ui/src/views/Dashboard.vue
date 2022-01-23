<template>
  <div class="container-md h-100">
    <div class="row h-100">
      <div class="col-12 col-sm-6 col-lg-8 h-100 order-1 order-sm-0">
        <Leaflet
          :trips="trips"
          :newTrip="newTrip"
          :zoom="2"
          :selected="selected"
          v-on:sendClickedCoord="setClickedCoord"
        ></Leaflet>
      </div>
      <div
        class="col-12 col-sm-6 col-lg-4 ms-auto bg-light sidebar h-100 order-0 order-sm-1"
      >
        <Sidebar
          :trips="trips"
          :newTrip="newTrip"
          :coords="coords"
          :clickedCoord="clickedCoord"
          v-on:setNewTrip="setNewTrip"
          v-on:getTrips="getTrips"
          v-on:updateMap="setToUpdate"
          v-on:focusTrip="focusTrip"
        ></Sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import Leaflet from "../components/Leaflet.vue";
import Sidebar from "../components/Sidebar.vue";
import store from "../store";

export default {
  name: "UserBoard",
  components: { Leaflet, Sidebar },
  data() {
    return {
      updated: undefined,
      selected: undefined,
      trips: [],
      newTrip: undefined,
      coords: undefined,
      clickedCoord: undefined,
    };
  },
  computed: {},
  watch: {
    updated: function (val) {
      if (!val) {
        this.getTrips();
        this.updated = true;
      }
    },
  },
  methods: {
    focusTrip(number) {
      this.selected = number;
    },
    setNewTrip(index) {
      if (index != null) {
        this.newTrip = this.trips[index];
      } else {
        this.newTrip = {
          date: null,
          type: "Feature",
          geometry: {
            type: "LineString",
            coordinates: [],
          },
          properties: {
            description: "",
            vehicle: "",
            markers: [],
          },
        };
      }
    },
    setToUpdate() {
      this.updated = false;
    },
    async getTrips(date) {
      const response = await fetch("api/trips/date/" + date, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.state.token,
        },
      });
      if (response.ok) {
        this.trips = await response.json();
        this.selected = undefined;
      } else if (response.status === 440) {
        store.commit("sessionExpired");
      } else {
        //something
      }
    },
    setClickedCoord(val) {
      this.clickedCoord = val;
    },
  },
  beforeMount() {
    this.setNewTrip();
  },
};
</script>

<style scoped></style>
