import {defineStore} from 'pinia'


export const useTransactionStore = defineStore('transaction', {
    state: () => {
        return {
            showForm: false,
            formTransaction: {},
        }
    },
    getters: {
    },
    actions: {
    }
})