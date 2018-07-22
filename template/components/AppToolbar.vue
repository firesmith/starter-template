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
        {{ toolbarTitle }}
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

<style>
#cudoToolbar {
  opacity: 1;
  transform: translateY(0);
  transition: transform .3s cubic-bezier(.4,0,.2,1) .3s,opacity 0s .3s;
}
#cudoToolbar .project-select {
  text-transform: none;
}
.cudo-toolbar-menu {
  max-width: 90%;
  top: 4px !important;
}
</style>
