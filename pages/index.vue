<template>
  <div>
    <mgl-map
      @click="clickHandler"
      ref="map"
      class="map"
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      :center.sync="center"
      :zoom.sync="zoom"
    > 
      <mgl-navigation-control position="top-right"/>
      <mgl-geojson-layer
        v-for="(store, index) in stores"
        :key="index"
        type="fill"
        :sourceId="'store-' + index"
        :layerId="'store-' + index"
        :source.sync="store"
      />
    </mgl-map>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import { MglMap, MglNavigationControl, MglGeojsonLayer } from 'vue-mapbox'
export default {
  data: () => ({
    // coords: [],
    stores: [{
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-35.97249197593885, -8.289317156462332],
          [-35.972515269599285, -8.289114328974662],
          [-35.972596578722346, -8.289123005983697],
          [-35.97257505598742, -8.2893257320805]
        ]]
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-35.97259114894854, -8.289328385061197],
          [-35.97261208174314, -8.28912400166432],
          [-35.972695708918195, -8.289132778968835],
          [-35.972674169000356, -8.28933590100273]
        ]]
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-35.9726869516133, -8.289338953274779],
          [-35.97270866025815, -8.289136064286197],
          [-35.97279036621211, -8.289145008319167],
          [-35.97276939730705, -8.289346769102039]
        ]]
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-35.97246632893405, -8.289532106976722],
          [-35.972484405205364, -8.289340253704154],
          [-35.97256900351215, -8.289349555340422],
          [-35.97255099358216, -8.289537321499125]
        ]]
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-35.97256726243336, -8.28953981133047],
          [-35.972585571376214, -8.289351015609725],
          [-35.97266836055542, -8.289358886364255],
          [-35.97265131746849, -8.289547495451885]
        ]]
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [-35.972662379987696, -8.289551364792473],
          [-35.9726787370048, -8.289360603500057],
          [-35.9727634413191, -8.289368696703434],
          [-35.97274474819835, -8.289557146036188]
        ]]
      }
    }],
    accessToken: 'pk.eyJ1Ijoiam9uYXRhbmxpbnMiLCJhIjoiY2pqYndhcDNwM25tYTNsdW95OGdwZmhtZyJ9.BNGqwrgJwI6ecSsLLUw_Ew',
    mapStyle: 'mapbox://styles/mapbox/streets-v10',
    center: [ -35.97151931455272, -8.291175983416423 ],
    zoom: 15.2
  }),
  // mounted () {
  //   this.$store.dispatch('stores/getStoreList')
  // },
  // computed: {
  //   ...mapState('stores', ['stores'])
  // },
  components: {
    MglMap,
    MglNavigationControl,
    MglGeojsonLayer
  }
}
</script>

<style lang="scss">
.map {
  width: 90vw;
  height: 500px;
  margin-top: 20px;
  border-radius: 10px;

  .mapboxgl-canvas-container {
    width: 100%;
    height: 100%;
  }
}

.center {
  position: absolute;
  z-index: 10;
  width: 2px;
  height: 2px;
  background-color: red;
  left: 249px;
  top: 249px;
}
</style>
