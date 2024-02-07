<template>
  <div class="transaction-form-box" v-if="transactionStore.showForm" @click.self="transactionStore.showForm = false">
    <div class="transaction-form">
      <div class="mb-3 justify-content-between d-flex align-items-center">
        <div class="category-box">
          <div class="icon-box d-inline-block mr-3">
            <font-awesome-icon :icon="categoriesStore.getCategory(transactionStore.formTransaction.category_id)?.icon"/>
          </div>
          {{categoriesStore.getCategory(transactionStore.formTransaction.category_id)?.title}}
        </div>
        <a v-if="showDeleteButton" href="#" @click="deleteTransaction"><font-awesome-icon icon="trash"/></a>
      </div>
      <input id="transaction-form-amount" type="text" class="form-control mb-2" placeholder="Amount" v-model="transactionStore.formTransaction.amount">
      <input id="transaction-form-description" type="text" class="form-control mb-2" placeholder="Description" v-model="transactionStore.formTransaction.description">

      <button v-if="showAddButton" type="button" class="btn btn-primary" @click="transactionStore.save()">Add</button>
      <button v-if="showEditButton" type="button" class="btn btn-primary" @click="transactionStore.save()">Edit</button>
    </div>
  </div>
</template>

<script>
import {mapStores} from "pinia";
import {useTransactionStore} from "@/stores/transaction.js";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useCategoriesStore} from "@/stores/categories.js";

export default {
  components: {FontAwesomeIcon},
  data(){
    return {}
  },
  props: {
    showDeleteButton: {
      type: Boolean,
      default: true
    },
    showAddButton: {
      type: Boolean,
      default: true
    },
    showEditButton: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    deleteTransaction() {
      this.transactionStore.deleteTransaction()
    },
  },
  computed: {
    ...mapStores(useTransactionStore, useCategoriesStore)
  }
}
</script>