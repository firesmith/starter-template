<template>
  <transition name="slide-y-transition">
    <v-toolbar
      id="cudoToolbar"
      app
      class="bg-grey"
      flat
      dense
      fixed >
      <v-toolbar-side-icon
        v-if="$vuetify.breakpoint.mdAndDown"
        @click.stop="setDrawerNav(true)" />
      <v-toolbar-title
        class="t-cap hidden-xs-only">
        \{{ toolbarTitle }}
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        v-if="!drawerRight"
        icon
        @click="setDrawerRight(true)">
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
  </transition>
</template>

<script>
import { SET_DRAWER_NAV, SET_DRAWER_RIGHT } from '../store/app'
import { mapMutations, mapState } from 'vuex'

export default {
  computed: {
    ...mapState('app', [
      'drawerRight',
      'enableSearch',
      'toolbarTabs',
      'toolbarTitle'
    ]),
    extended () {
      return this.enableSearch || !!this.toolbarTabs
    }
  },
  methods: mapMutations('app', [SET_DRAWER_NAV, SET_DRAWER_RIGHT])
}
</script>
