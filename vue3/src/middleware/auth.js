export default function(next, store) {
  if (!store.state.isLoggedIn) {
    next("/");
    store.dispatch("login");
  } else {
    next();
  }
}
