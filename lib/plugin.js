const {createAuth0Client} = require('@auth0/auth0-spa-js').default

export default async function (ctx, inject) {
  // Options
  const options = JSON.parse('<%= JSON.stringify(options) %>')

  const $auth = await createAuth0Client(options);

  inject('auth0', $auth)
  ctx.$auth0 = $auth
}
