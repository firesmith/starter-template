import { SET_TOOLBAR_TITLE } from '../store/app'
export default ({ route, store }) => {
  const { commit } = store
  const toolbarTitles = {
    'index': 'Dashboard'
  }
  const title = toolbarTitles[route.name] || ''
  commit('app/' + SET_TOOLBAR_TITLE, title)
}
