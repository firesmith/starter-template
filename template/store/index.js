import groups from '../core/api'

export const actions = {
  fetchGroups () {
    return groups()
  }
}
