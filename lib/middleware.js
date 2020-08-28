//- Not implemented
export default async ({ $auth0, route, redirect, store }) => {
  if (!await $auth0.isAuthenticated()) {
    await $auth0.loginWithRedirect({
      redirect_uri: `${window.origin}/app`,
      appState: route.path
    })
    return new Promise(() => {})
  } else if (!store.state.user.userId) {
    return $auth0.getUser()
      .then((user) => {
        store.commit('SET_USER', user)
      })
  }
}
