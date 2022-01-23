<template>
  <div class="container">
    <Leaflet
      :trips="trips"
      :new-trip="trip"
      :center="[45.7343714609777, 13.717808441567188]"
      :zoom="10"
    />
  </div>
</template>

<script>
import Leaflet from "@/components/Leaflet";
export default {
  name: "Home",
  components: { Leaflet },
  data() {
    return {
      trips: [],
      trip: {
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
      },
    };
  },
  mounted() {
    this.trips = [
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [13.79403067187904, 45.6862419784061],
            [13.803377772576802, 45.67824153462351],
            [13.825473052336267, 45.67290570084128],
            [13.837007172217664, 45.681222372607074],
            [13.847993660932884, 45.66549507422975],
            [13.863443410688662, 45.64195590118592],
            [13.896641942543791, 45.62779127690673],
            [13.909310735248049, 45.63463960388317],
            [13.892951163752285, 45.64440603207172],
          ],
        },
        properties: {
          description: "Giro in bici",
          vehicle: "bike",
          markers: [0, 3, 8],
        },
      },
      {
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: [
            [13.772788552216582, 45.65686339108357],
            [13.744379267132853, 45.68872209812295],
            [13.710561481556338, 45.71247477387874],
            [13.662255265034364, 45.74640679449186],
            [13.638050657083665, 45.77133308181822],
            [13.593315047298693, 45.78839157973983],
            [13.526364985416494, 45.80793542219653],
            [13.499585419173165, 45.82756809116508],
          ],
        },
        properties: {
          description: "Viaggio in aeroporto",
          vehicle: "train",
          markers: [0, 7],
        },
      },
    ];
  },
};
</script>
