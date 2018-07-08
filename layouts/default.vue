<template>
  <v-app>
    <v-toolbar fixed app :clipped-left="clipped" color="primary" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>SmartFeira</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    >
      <v-list>
        <v-list-tile @click.native="$router.push('/')">
          <v-list-tile-action>
            <v-icon light>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Home</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click.native="$router.push('/loja')">
          <v-list-tile-action>
            <v-icon light>store</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Loja da Dona Maria</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>
<style>
.search_bar{
  background-color: white;
  height: 100px;
}
</style>
