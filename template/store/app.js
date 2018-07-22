export const SET_DRAWER_NAV = 'setDrawerNav'
export const SET_DRAWER_RIGHT = 'setDrawerRight'
export const SET_TOOLBAR_TITLE = 'setToolbarTitle'

export const mutations = {
  [SET_DRAWER_NAV] (state, toggle) {
    state.drawerNav = toggle
  },
  [SET_DRAWER_RIGHT] (state, toggle) {
    state.drawerRight = toggle
  },
  [SET_TOOLBAR_TITLE] (state, title) {
    state.toolbarTitle = title
  }
}

export const state = () => ({
  drawerNav: true,
  drawerRight: false,
  enableSearch: false,
  toolbarTabs: false,
  toolbarTitle: ''
})
