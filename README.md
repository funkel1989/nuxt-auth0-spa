# auth0-spa-module

Simplifies [auth0-spa-js](https://github.com/auth0/auth0-spa-js) integration with Nuxt.js

 * [nuxt/nuxt.js: The Vue.js Framework](https://github.com/nuxt/nuxt.js)
 * [auth0/auth0-spa-js: Auth0 authentication for Single Page Applications (SPA) with PKCE](https://github.com/auth0/auth0-spa-js)

## Install

```
yarn add nuxt-auth0-spa
```

## Setup

add modules and auth0 setting to nuxt.config.js

```nuxt.config.js
  modules: [
    'nuxt-auth0-spa'
  ],
  auth0: {
    domain: '<YOUR_AUTH0_DOMAIN>',
    clientId: '<YOUR_AUTH0_CLIENT_ID>',
    audience: 'http://localhost:3000/'
  }
```

## Development

Running demo for development

```
yarn install
yarn dev
```

## License

[MIT License](./LICENSE)
