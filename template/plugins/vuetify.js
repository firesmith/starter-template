import 'babel-polyfill'
// material.io/icons
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VAlert,
  VAvatar,
  VBtn,
  VBtnToggle,
  VCard,
  VCheckbox,
  VChip,
  VDataTable,
  VDialog,
  VDivider,
  VFooter,
  VIcon,
  VGrid,
  VList,
  VMenu,
  VNavigationDrawer,
  VProgressLinear,
  VSelect,
  VSnackbar,
  VSubheader,
  VSwitch,
  VTabs,
  VTextField,
  VToolbar,
  VTooltip,
  transitions
} from 'vuetify'

import './styles/main.styl'

const components = {
  VApp,
  VAlert,
  VAvatar,
  VBtn,
  VBtnToggle,
  VCard,
  VCheckbox,
  VChip,
  VDataTable,
  VDialog,
  VDivider,
  VFooter,
  VIcon,
  VGrid,
  VList,
  VMenu,
  VNavigationDrawer,
  VProgressLinear,
  VSelect,
  VSnackbar,
  VSubheader,
  VSwitch,
  VTabs,
  VTextField,
  VToolbar,
  VTooltip,
  transitions
}

const theme = {
  primary: '#9c27b0',
  accent: '#ce93d8',
  secondary: '#424242',
  info: '#0D47A1',
  warning: '#ffb300',
  error: '#B71C1C',
  success: '#2E7D32'
}

Vue.use(Vuetify, {
  components,
  theme
})
