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
          <input type="text" placeholder="Name" v-model.trim="registerData.name">
          <small class="text-danger">{{ formatErrors(errors.name) }}</small>
          <input type="text" placeholder="Email" v-model.trim="registerData.email">
          <small class="text-danger">{{ formatErrors(errors.email) }}</small>
          <input type="password" placeholder="Password" v-model.trim="registerData.password">
          <small class="text-danger">{{ formatErrors(errors.password) }}</small>
          <input type="password" placeholder="Password confirmation" v-model.trim="registerData.password_confirmation">
          <small class="text-danger">{{ formatErrors(errors.password_confirmation) }}</small>
          <div>
            <button class="btn" @click="register">Sign Up</button>
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

import {mapStores} from "pinia";
import {useAccountStore} from "@/stores/account.js";

export default {
  data(){
    return{
      registerData: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      errors: {}
    }
  },
  methods: {
    register() {
      axios.post(`/register`, this.registerData).then(() => {
        this.accountStore.fetchMyAccount()
      }).catch((error) => {
        if (error.response) {
          this.errors = error.response.data.errors
        }
      })
    },
    goToLogin(){
      this.$emit('goToLogin')
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
    ...mapStores(useAccountStore),
  }
}
</script>

<style scoped>
</style>


