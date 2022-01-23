<template>
  <l-map ref="map" @click="clickMap" :zoom="zoom" :center="center">
    <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    <l-geo-json
      ref="geo_json"
      :geojson="geojson"
      :options="options"
      :options-style="styleFunction"
    />
    <l-layer-group v-for="(trip, indexTrip) in geojson" :key="indexTrip">
      <l-marker
        v-for="(indexCoord, indexMarker) in trip.properties.markers"
        :key="indexMarker"
        :latLng="[
          trip.geometry.coordinates[indexCoord][1],
          trip.geometry.coordinates[indexCoord][0],
        ]"
      ></l-marker>
    </l-layer-group>
  </l-map>
</template>

<script>
export default {
  name: "Leaflet",
  components: {
    "l-map": window.Vue2Leaflet.LMap,
    "l-tile-layer": window.Vue2Leaflet.LTileLayer,
    "l-layer-group": window.Vue2Leaflet.LLayerGroup,
    "l-marker": window.Vue2Leaflet.LMarker,
    "l-geo-json": window.Vue2Leaflet.LGeoJson,
  },
  props: {
    trips: Array,
    selected: Number,
    newTrip: Object,
    zoom: Number,
    center: Array,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',

      options: {
        onEachFeature: this.onEachFeature,
      },
      markers: [],
    };
  },
  computed: {
    geojson() {
      if (this.selected !== undefined) {
        return [this.trips[this.selected], this.newTrip];
      } else {
        return [...this.trips, this.newTrip];
      }
    },
  },

  methods: {
    styleFunction() {
      return () => {
        return {
          weight: 4,
          color: "#000000",
          opacity: 1,
        };
      };
    },
    adjustBounds() {
      try {
        this.$refs.map.mapObject.flyToBounds(this.$refs.geo_json.getBounds());
      } catch (error) {
        //to avoid console errors when newTrips are created
      }
    },
    onEachFeature(feature, layer) {
      layer
        .bindTooltip(feature.properties.description, {
          sticky: true,
          interactive: true,
        })
        .openTooltip();
    },
    clickMap(e) {
      this.$emit("sendClickedCoord", e.latlng);
    },
    dragMarker(e) {
      this.$emit("sendClickedCoord", e.target._latlng);
    },
  },
  watch: {
    geojson: function () {
      if (this.geojson.length < 1) {
        return;
      }
      setTimeout(() => {
        this.adjustBounds();
      }, 500);
    },
  },
  mounted() {},
};
</script>
