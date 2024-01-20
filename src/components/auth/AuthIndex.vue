<template>
  <login v-if="activePage === 'login'" @goToRegister="activePage = 'register'"/>
  <register v-if="activePage === 'register'" @goToLogin="activePage = 'login'"/>
</template>

<script>
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";


export default {
  components: {Register, Login},
  data() {
    return {
      activePage: 'login'
    }
  }
}
</script>
