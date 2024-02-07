<template>
  <headerComponent/>
  <calendar/>
  <category-balance/>
  <div class="history">
    <div v-for="day in groupedTransactions" :key="day.date" class="history-day">
      <div class="history-date">{{ day.date }}</div>
      <div class="history-list-items">
        <div class="history-item"
             v-for="transaction in day.transactions"
             :key="transaction.id"
             @click="editTransaction(transaction)"
        >
          <div id="flex">
            <div class="logo">
              <div>
                <font-awesome-icon :icon="categoriesStore.getCategory(transaction.category_id)?.icon"/>
              </div>
            </div>
            <div class="items-name">
              <h5>{{ transaction.description }}</h5>
              <span>{{ categoriesStore.getCategory(transaction.category_id)?.title }}</span>
            </div>
          </div>
          <div class="sum">{{ transaction.amount }}</div>
        </div>
      </div>
    </div>
  </div>
  <transaction-form :showAddButton="false" :showEditButton="true"/>
</template>

<script>
import Calendar from "@/components/widjest/Calendar.vue";
import HeaderComponent from "@/components/widjest/HeaderComponent.vue";
import CategoryBalance from "@/components/widjest/CategoryBalance.vue";
import {mapStores} from "pinia";
import {useTransactionStore} from "@/stores/transaction.js";
import {useCategoriesStore} from "@/stores/categories.js";
import TransactionForm from "@/components/transaction/TransactionForm.vue";

export default {
  components: {TransactionForm, CategoryBalance, Calendar, HeaderComponent},
  return() {

  },
  methods: {
    editTransaction(transaction) {
      this.transactionStore.formTransaction = {...transaction}
      this.transactionStore.showForm = true
    }
  },
  computed: {
    ...mapStores(useTransactionStore, useCategoriesStore),
    groupedTransactions() {
      const grouped = {}
      this.transactionStore.transactions.forEach(transaction => {
        const date = transaction.spent_at.split(' ')[0]
        if (!grouped[date]) {
          grouped[date] = {
            date: date,
            transactions: []
          }
        }
        grouped[date].transactions.push(transaction)
      })
      return Object.values(grouped)
    },
  }
}
</script>

<style scoped>
</style>