<template>
  <v-app>
    <app-drawer />
    <app-toolbar />
    <!-- <v-toolbar
      :clipped-left="clipped"
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"/>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"/>
      </v-btn>
      <v-btn
        icon
        @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn
        icon
        @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer">
        <v-icon>menu</v-icon>
      </v-btn>
    </v-toolbar> -->
    <v-content>
      <nuxt />
    </v-content>
    <app-drawer-right />
  </v-app>
</template>

<script>
import AppDrawer from '@/components/AppDrawer'
import AppDrawerRight from '@/components/AppDrawerRight'
import AppToolbar from '@/components/AppToolbar'

export default {
  components: {
    AppDrawer,
    AppDrawerRight,
    AppToolbar
  },
  middleware: 'routeWatcher',
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
