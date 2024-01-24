<template>
  <header class="header">
    <div class="logo">
      <div class="logo-img"><img alt="logo" src="../../images/Kitty-Logo.png"></div>
      <div class="logo-text">Kitty</div>
    </div>
    <div class="header-nav">
      <div class="icon"><font-awesome-icon icon="search"/></div>
      <div class="avatar">{{accountStore.account.name.slice(0, 1)}}</div>
    </div>
  </header>
</template>

<script>

import {mapStores} from "pinia";
import {useAccountStore} from "@/stores/account.js";

export default {
  data(){
    return {}

  },
  computed: {
    ...mapStores(useAccountStore)
  }
}
</script>