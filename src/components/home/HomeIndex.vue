<template>
  <headerComponent/>
  <calendar/>
  <category-balance/>

  <div v-for="category in categories"
       :key="category.id"
       class="category-balance"
       @click="addTransactionToCategory(category)">
    <div class="title">{{ category.title }}</div>
    <div class="icon">
      <font-awesome-icon :icon="category.icon"/>
    </div>
    <div class="balance" :style="{ color: categoryColor(category) }">500</div>
  </div>

  <transaction-form/>
</template>
<script>

import Calendar from "@/components/widjest/Calendar.vue";
import HeaderComponent from "@/components/widjest/HeaderComponent.vue";
import CategoryBalance from "@/components/widjest/CategoryBalance.vue";
import TransactionForm from "@/components/transaction/TransactionForm.vue";
import {mapStores} from "pinia";
import {useCategoriesStore} from "@/stores/categories.js";
import {useCoreStore} from "@/stores/core";
import {useTransactionStore} from "@/stores/transaction.js";

export default {
  components: {CategoryBalance, Calendar, HeaderComponent, TransactionForm},
  return() {

  },
  computed: {
    ...mapStores(useCategoriesStore, useCoreStore,useTransactionStore),
    categories() {
      if (this.coreStore.state === 'expenses') {
        return this.categoriesStore.expensesCategories
      } else if (this.coreStore.state === 'incomes') {
        return this.categoriesStore.incomesCategories
      }
      return this.categoriesStore.categories
    }
  },
  methods: {
    categoryColor(category) {
      if (this.coreStore.state === 'incomes') {
        return 'green'
      } else if (this.coreStore.state === 'expenses') {
        return 'red'
      }
      return ''
    },
    addTransactionToCategory(category) {
      this.transactionStore.formTransaction.category_id = category.id
      this.transactionStore.formTransaction.type = category.type

      this.transactionStore.showForm = true
    }
  },
  created() {
    this.categoriesStore.fetchCategories()
  }
}
</script>