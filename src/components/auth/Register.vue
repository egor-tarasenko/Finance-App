<template>
  <div class="register">
    <div class="auth-container container d-flex justify-content-center">
      <div>
        <div class="logo">
          <img alt="logo" src="../../images/Kitty-Logo.png">
          <h3>Kitty</h3>
        </div>
        <div>
          <h3>Create an account</h3>
        </div>
        <div class="form">
          <input type="text" placeholder="Name">
          <input type="text" placeholder="Email">
          <input type="text" placeholder="Password">
          <input type="text" placeholder="Password confirmation">
          <div>
            <button class="btn">Sign Up</button>
          </div>
        </div>
        <div class="another-entrance">
          <h6>Have an account?</h6>
          <button class="btn btn-close-white" @click="goToLogin">Sign in</button>
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
    goToLogin(){
      this.$emit('goToLogin')
    }
  }
}
</script>

