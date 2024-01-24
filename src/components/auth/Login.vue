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
          <input type="text" placeholder="Email" v-model.trim="loginData.email">
          <input type="password" placeholder="Password" v-model.trim="loginData.password">
          <small class="text-danger">{{ formatErrors(errors.email) }}</small>
          <div>
            <button class="btn" @click="login">Sign In</button>
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

import {mapStores} from "pinia";
import {useAccountStore} from "@/stores/account.js";

export default {
  data() {
    return {
      loginData: {
        email: 'Egor@gmail.com',
        password: '12345678',
      },
      errors: {}
    }
  },
  methods: {
    login() {
      axios.post(`/login`, this.loginData).then((response) => {
        this.accountStore.fetchMyAccount()
      }).catch((error) => {
        if (error.response) {
          this.errors = error.response.data.errors
        }
      })
    },
    goToRegister() {
      this.$emit('goToRegister')
    },
    formatErrors(errorArray) {
      if (Array.isArray(errorArray)) {
        return errorArray.join(' ')
      } else {
        return '';
      }
    },
  },
  computed: {
    ...mapStores(useAccountStore)
  }
}
</script>