import {defineStore} from 'pinia'


export const useCategoriesStore = defineStore('categories', {
    state: () => {
        return {
            categories: [],
            categoryIncome: 'incomes',
            categoryExpenses: 'expenses',
        }
    },
    getters: {
        incomesCategories: (state) => state.categories.filter((category) => category.type === state.categoryIncome),
        expensesCategories: (state) => state.categories.filter((category) => category.type === state.categoryExpenses)
    },
    actions: {
        async fetchCategories() {
            axios.get('/categories').then((response) => {
                this.categories = response.data
            }).catch(() => {
                console.log('error')
            })
        },
        getCategory(categoryId){
            return this.categories.find((item) => item.id === categoryId)
        }
    }
})