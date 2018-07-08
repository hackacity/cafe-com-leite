<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <h2>{{ coords }}</h2>
      <v-btn @click="getCoords">Obter Localização</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    coords: []
  }),
  methods: {
    getCoords () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          this.coords = [ coords.longitude, coords.latitude ]
        }, error => {
          this.coords = error
        }, {
          enableHighAccuracy: true,
          timeout: 5000
        })
      } else {
        this.coords = 'Não foi possível obter a localização'
      }
    }
  }
}
</script>