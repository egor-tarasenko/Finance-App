<template>
  <div class="row category-balance-box">
    <div class="col-4 home-stats" @click=" coreStore.state = 'expenses'">
      <div class="icon-box"><font-awesome-icon icon="money-bill"/></div>
      <div class="expanses"> -12,000</div>
      <div class="title">Expanses</div>
    </div>

    <div class="col-4 home-stats">
      <div class="icon-box"> <font-awesome-icon icon="wallet"/></div>
      <div class="balance">58,000</div>
      <div class="title">Balance</div>
    </div>

    <div class="col-4 home-stats" @click=" coreStore.state = 'incomes'">
      <div class="icon-box"> <font-awesome-icon icon="bank"/></div>
      <div class="income">70,000</div>
      <div class="title">Income</div>
    </div>
  </div>
</template>

<script>
import {mapStores} from "pinia";
import {useCoreStore} from "@/stores/core.js";

export default {
  data() {
    return{

    }
  },
  computed: {
    ...mapStores(useCoreStore)
  }
}
</script>