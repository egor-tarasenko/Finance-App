<template>
  <div class="transaction-form-box" v-if="transactionStore.showForm" @click.self="transactionStore.showForm = false">
    <div class="transaction-form">
      <div class="mb-3 justify-content-between d-flex align-items-center">
        <div class="category-box">
          <div class="icon-box d-inline-block mr-3"></div>
        </div>
        <a href="#"><font-awesome-icon icon="trash"/></a>
      </div>
      <input id="transaction-form-amount" type="text" class="form-control mb-2" placeholder="Amount" v-model="transactionStore.formTransaction.amount">
      <input id="transaction-form-description" type="text" class="form-control mb-2" placeholder="Description" v-model="transactionStore.formTransaction.description">

      <button type="button" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
import {mapStores} from "pinia";
import {useTransactionStore} from "@/stores/transaction.js";

export default {

  data(){
    return {

    }
  },
  computed: {
    ...mapStores(useTransactionStore)
  }
}
</script>