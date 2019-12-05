const layout = {
  state: {
    sideBarCollapse: false
  },
  mutations: {
    COLLAPSE_SIDEBAR: state => {
      state.sideBarCollapse = !state.sideBarCollapse
    }
  },
  actions: {
    collapseSideBar({commit}) {
      commit('COLLAPSE_SIDEBAR')
    }
  }
}
export default layout
