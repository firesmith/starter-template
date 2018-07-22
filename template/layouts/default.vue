<template>
  <v-app>
    <app-drawer />
    <app-toolbar />
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
