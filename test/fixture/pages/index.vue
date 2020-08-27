<template>
  <div>
    <button
      type="button"
      @click='login'
    >Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    async login() {
      await this.$auth0.loginWithPopup();
      console.log(await this.$auth0.getTokenSilently());
    }
  }
}
</script>