const pageViews = {
  state: {
    visits: []
  },
  mutations: {
    ADD_VISIT(state, path) {
      state.visits.push({
        path,
        date: new Date().toJSON()
      })
    }
  }
}
export default pageViews
