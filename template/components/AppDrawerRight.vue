<template>
  <v-navigation-drawer
    v-model="open"
    app
    fixed
    right
  >
    <v-toolbar
      dense
      flat>
      <v-btn
        icon
        @click="setDrawerRight(false)">
        <v-icon>chevron_right</v-icon>
      </v-btn>
      <v-toolbar-title>Alerts</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>info</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Lorem list</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { SET_DRAWER_RIGHT } from '../store/app'
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('app', ['drawerRight']),
    open: {
      get () {
        return this.drawerRight
      },
      set (v) {
        this.setDrawerRight(v)
      }
    }
  },
  mounted () {
    this.setDrawerRight(this.$vuetify.breakpoint.xlOnly)
  },
  methods: mapMutations('app', [SET_DRAWER_RIGHT])
}
</script>
