<template>
  <h3>AuthIndex</h3>


  <login/>
  <register/>
</template>

<script>
import Login from "@/components/auth/Login.vue";
import Register from "@/components/auth/Register.vue";


export default {
  components: {Register, Login},
  return(){}

}
</script>

<style scoped>

</style>