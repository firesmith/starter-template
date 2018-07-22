<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="mini"
    app
    fixed
    persistent
  >
    <v-layout
      :class="`app-drawer mini-${mini}`"
      column
      fill-height>
      <v-toolbar
        class="drawer-header"
        color="transparent"
        extended
        flat
        @click="value && $emit('input', false)">
        <app-logo
          v-bind="{mini: $vuetify.breakpoint.lgAndUp && drawer}"
          :icon="mini"
          class="absolute logo ml-1 mt-2"
          height="48"
        />
      </v-toolbar>
      <v-list :class="`navigation pa-0 keep-width mini-${mini}`">
        <v-list-tile
          v-for="nav in navigationItems"
          v-bind="nav.props"
          :key="nav.name"
          :to="{name: nav.name}"
          avatar
        >
          <v-list-tile-action>
            <v-icon>\{{ nav.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              \{{ nav.label }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <!-- <v-spacer /> -->
      <v-list class="pa-0 hidden-md-and-down">
        <v-divider />
        <v-list-tile
          @click="mini = !mini"
        >
          <v-spacer />
          <v-btn
            :class="mini ? 'mx-auto' : 'ml-auto'"
            icon
          >
            <v-icon :class="`rotate-flip flip-${mini}`">chevron_left</v-icon>
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import AppLogo from '@/components/AppLogo'
import { SET_DRAWER_NAV } from '../store/app'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    AppLogo
  },
  data () {
    return {
      mini: false,
      navigationItems: [
        {
          icon: 'dashboard',
          label: 'Dashboard',
          name: 'index',
          props: {
            exact: true
          }
        }
        // {
        //   icon: 'change_history',
        //   label: 'Miners',
        //   name: 'miners'
        // },
        // {
        //   icon: 'show_chart',
        //   label: 'Transactions',
        //   name: 'transactions',
        //   props: {
        //     exact: true
        //   }
        // },
        // {
        //   icon: 'attach_money',
        //   label: 'Calculator',
        //   name: 'calculator',
        //   props: {
        //     extact: true
        //   }
        // },
        // {
        //   icon: 'group',
        //   label: 'Users',
        //   name: 'users',
        //   props: {
        //     exact: true
        //   }
        // },
        // {
        //   icon: 'public',
        //   label: 'Download Page',
        //   name: 'download-page',
        //   donateOnly: true,
        //   props: {
        //     exact: true
        //   }
        // },
        // {
        //   icon: 'settings',
        //   label: 'Settings',
        //   name: 'settings'
        // }
      ]
    }
  },
  computed: {
    ...mapState('app', ['drawerNav']),
    drawer: {
      get () {
        return this.drawerNav
      },
      set (v) {
        this.setDrawerNav(v)
      }
    }
  },
  mounted () {
    this.setDrawerNav(this.$vuetify.breakpoint.mdAndUp)
  },
  methods: mapMutations('app', [SET_DRAWER_NAV])
}
</script>

<style scoped>
.app-drawer {
  overflow: hidden;
}
.logo {
  margin-right: auto;
}
.mini-true .org-avatar {
  transform: translateX(0);
}
.navigation {
  flex: 1;
  overflow-y: auto;
}
.app-drawer >>> .v-toolbar__content {
  padding: 1rem 16px;
}
footer {
  overflow: hidden;
}
span.absolute {
  bottom: 7px;
  left: 24px;
  overflow: hidden;
}

</style>
