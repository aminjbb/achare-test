<template>
  <div class="d-flex d-flex-justify-center">
    <div class="add-location">
      <div class="map-header text-right pt-1 px-10">
      <span class="t12 w700 text-black ">
        موقعیت مورد نظر خود را روی نقشه مشخص کنید
      </span>
      </div>
      <l-map style="width: 100% ; height: 400px" :zoom="zoom" :center="center"       @click="handleMapClick">
        <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-marker :lat-lng="center"></l-marker>
      </l-map>
    </div>

  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// رفع مشکل آیکون پیش‌فرض
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
});

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 13,
        center: [35.6892, 51.3890], // مختصات تهران
      clickedCoordinates: null, // برای ذخیره مختصات کلیک شده

    };
  },
  methods: {
    handleMapClick(event) {
      const latLng = event.latlng;
      this.center = [latLng.lat, latLng.lng];
    },
  },

};
</script>

<style>
@import "leaflet/dist/leaflet.css";
</style>
