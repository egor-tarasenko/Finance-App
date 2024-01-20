<template>
  <div class="login">
    <div class="auth-container container d-flex justify-content-center">
      <div>
        <div class="logo">
          <img alt="logo" src="../../images/Kitty-Logo.png">
          <h3>Kitty</h3>
        </div>
        <div>
          <h3>Login</h3>
        </div>
        <div class="form">
          <input type="text" placeholder="Email">
          <input type="text" placeholder="Password">
          <div>
            <button class="btn">Sign In</button>
          </div>
        </div>
        <div class="another-entrance">
          <h6>Don’t have an account?</h6>
          <button class="btn btn-close-white" @click="goToRegister">Sign up</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  return() {

  },
  methods: {
    goToRegister(){
      this.$emit('goToRegister')
    }
  }
}
</script>