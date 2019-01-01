export default {
  changeState(state, city) {
    state.city = city
    localStorage.city = city
  }
}