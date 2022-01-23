<template>
  <div class="container align-item-center">
    <div
      class="d-flex justify-content-between align-items-center pt-3 pb-3 mb-3 border-bottom"
    >
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2 align-items-center">
          <DatePicker v-model="date"></DatePicker>
          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="today"
          >
            Today
          </button>
        </div>
      </div>
      <div class="btn-toolbar mb-2 mb-md-0">
        <div class="btn-group me-2">
          <button
            type="button"
            class="btn btn-outline-secondary"
            v-if="!addSectionVisible"
            @click="openAddSection"
          >
            Add
          </button>
        </div>
      </div>
    </div>
    <div v-if="!addSectionVisible" class="accordion" id="accordionTrips">
      <p v-if="trips.length === 0">No trips added in this date yet</p>
      <div
        class="accordion-item"
        v-for="(trip, indexTrip) in this.trips"
        :key="indexTrip"
      >
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed d-flex justify-content-between"
            type="button"
            data-bs-toggle="collapse"
            v-bind:data-bs-target="'#collapse-' + indexTrip"
            aria-expanded="false"
            v-bind:aria-label="indexTrip"
            ref="detailsButton"
            @click="focusTrip($event)"
          >
            <i v-bind:class="icon(trip.properties.vehicle)"></i>
            <span class="ms-3">{{ trip.properties.description }}</span>
          </button>
        </h2>
        <div
          v-bind:id="'collapse-' + indexTrip"
          class="accordion-body collapse"
          data-bs-parent="#accordionTrips"
          ref="detailsSection"
        >
          <table class="table">
            <tbody>
              <tr
                v-for="(coord, indexCoord) in trip.geometry.coordinates"
                :key="indexCoord"
              >
                <td>{{ indexCoord + 1 }}:</td>
                <td>Lng: {{ coord[0] | fixedPoint }}</td>
                <td>Lat: {{ coord[1] | fixedPoint }}</td>
                <td>
                  <input
                    type="checkbox"
                    :value="indexCoord"
                    v-model="trip.properties.markers"
                    disabled
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <div class="container btn-group mt-3 justify-content-center">
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="openEditSection(indexTrip)"
            >
              Edit
            </button>
            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="deleteTrip(trip.id_trip)"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="addSectionVisible">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="">Descr.</span>
        </div>
        <input
          v-model="newTrip.properties.description"
          type="text"
          class="form-control"
          placeholder="Custom description"
        />
      </div>
      <div
        v-for="(coord, index) in this.coords"
        :key="index"
        class="input-group mb-1 d-inline-flex flex-nowrap"
      >
        <div class="input-group-prepend">
          <span class="input-group-text">Coord.</span>
        </div>
        <VDropdown :placement="'top'">
          <input
              type="text"
              class="form-control"
              placeholder="Longitude"
              v-model="coord[0]"
              @focus="readyImportCoord(index)"
          />
          <template> Click on the map to import a landmark</template>

          <input
              type="text"
              class="form-control"
              placeholder="Latitude"
              v-model="coord[1]"
              @focus="readyImportCoord(index)"
          />
          <template #popper> Click on the map to import a landmark</template>
        </VDropdown>
        <div class="input-group-append">
          <span class="input-group-text custom-checkbox">
            <input
              type="checkbox"
              :value="index"
              v-model="newTrip.properties.markers"
            />
          </span>
        </div>
      </div>

      <div
        class="container align-item-center d-flex justify-content-center mb-3 mt-3"
      >
        <i class="fas fa-plus-circle m-2" @click="addCoord"></i>
        <i
          v-if="coords.length > 2"
          class="fas fa-minus-circle m-2"
          @click="removeCoord"
        ></i>
      </div>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="vehicleSelection">Vehicle</label>
        </div>
        <select
          class="form-select"
          id="vehicleSelection"
          v-model="newTrip.properties.vehicle"
        >
          <option selected>Choose...</option>
          <option value="bike">Bike</option>
          <option value="car">Car</option>
          <option value="motorbike">Motorbike</option>
          <option value="train">Train</option>
          <option value="bus">Bus</option>
          <option value="plane">Plane</option>
        </select>
      </div>
      <div class="container btn-group mt-3 justify-content-center">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="setTripEdited"
        >
          Save
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="closeAddEditSection"
        >
          Back
        </button>
      </div>
    </div>
    <Modal :open="popup" :msg="popupMsg" :deletionModal="false"></Modal>
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import store from "../store";

export default {
  name: "Sidebar",
  components: { DatePicker },
  data() {
    return {
      date: null,
      addSectionVisible: false,
      editMode: false,
      coords: [[], []],
      selectedImportCoord: undefined,
      popup: false,
      popupMsg: "",
    };
  },
  props: {
    trips: Array,
    newTrip: Object,
    clickedCoord: Object,
  },
  methods: {
    addCoord() {
      this.coords.push([]);
    },
    removeCoord() {
      this.coords.pop();
    },
    today() {
      this.date = new Date();
    },
    openAddSection() {
      this.addSectionVisible = true;
    },
    closeAddEditSection() {
      this.addSectionVisible = false;
      this.editMode = false;
      this.coords = [[], []];
      this.$emit("setNewTrip");
      this.$emit("focusTrip");
      this.$emit("getTrips", this.dateToString);
    },
    openEditSection(index) {
      this.$emit("setNewTrip", index);
      this.$nextTick(function () {
        this.coords = [...this.newTrip.geometry.coordinates];
      });

      this.addSectionVisible = true;
      this.editMode = true;
    },
    async deleteTrip(id) {
      if (confirm("Are you sure?")) {
        const response = await fetch("api/trips/" + id, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + store.state.token,
          },
        });
        if (response.ok) {
          this.$emit("getTrips", this.dateToString);
        } else if (response.status === 440) {
          store.commit("sessionExpired");
        } else {
          alert("Ops! Something went wrong... please retry!");
        }
        this.$emit("focusTrip");
      }
    },
    async setTripEdited() {
      let method = "POST";
      if (this.editMode === true) {
        method = "PUT";
      }
      this.newTrip.date = this.date;
      const response = await fetch("api/trips", {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + store.state.token,
        },
        body: JSON.stringify(this.newTrip),
      });
      if (response.ok) {
        this.$emit("getTrips", this.dateToString);
      } else if (response.status === 440) {
        store.commit("sessionExpired");
      } else {
        alert("Ops! Something went wrong!");
      }
      this.closeAddEditSection();
    },
    icon(v) {
      let iconHtml = "";
      switch (v) {
        case "car":
          iconHtml = "fas fa-car-side";
          break;
        case "motorbike":
          iconHtml = "fas fa-motorcycle";
          break;
        case "bike":
          iconHtml = "fas fa-bicycle";
          break;
        case "bus":
          iconHtml = "fas fa-bus-alt";
          break;
        case "train":
          iconHtml = "fas fa-train";
          break;
        case "plane":
          iconHtml = "fas fa-plane";
          break;
        default:
          iconHtml = "";
      }
      return iconHtml;
    },
    focusTrip(event) {
      const expanded = event.target.ariaExpanded === "true";
      if (expanded) {
        const label = Number(event.target.ariaLabel);
        this.$emit("focusTrip", label);
      } else {
        this.$emit("focusTrip");
      }
    },
    readyImportCoord(index) {
      this.selectedImportCoord = index;
    },
  },
  filters: {
    fixedPoint: function (num) {
      return parseFloat(num).toFixed(4);
    },
  },

  computed: {
    dateToString() {
      return (
        this.date.getFullYear() +
        "/" +
        this.date.getMonth() +
        "/" +
        this.date.getDate()
      );
    },
  },

  watch: {
    date: function () {
      if (this.date != null && !this.addSectionVisible) {
        this.$emit("getTrips", this.dateToString);
      }
    },
    clickedCoord: function () {
      if (this.selectedImportCoord !== undefined) {
        const coord = this.coords[this.selectedImportCoord];
        this.$set(coord, 0, this.clickedCoord.lng);
        this.$set(coord, 1, this.clickedCoord.lat);
        this.selectedImportCoord = undefined;
      }
    },
    coords: function () {
      let tmp = [];
      for (let coord of this.coords) {
        if (coord[0] !== undefined && coord[1] !== undefined) {
          tmp.push(coord);
        }
      }
      this.newTrip.geometry.coordinates = tmp;
    },
  },

  mounted() {
    this.today();
  },
};
</script>

<style>
.mx-datepicker {
  width: 120px;
}
.mx-input {
  height: 38px !important;
}
.v-popper {
  width: auto !important;
}
</style>

<style scoped>
.input-group-text {
  width: 80px;
}
.input-group-prepend {
  display: flex;
}
.custom-checkbox {
  width: 38px;
  height: 38px;
}
</style>
