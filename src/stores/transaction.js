import {defineStore} from 'pinia'


export const useTransactionStore = defineStore('transaction', {
    state: () => {
        return {
            transactions: [],
            showForm: false,
            formTransaction: {},
        }
    },
    getters: {},
    actions: {
        async fetchTransactions() {
            axios.get('/transactions').then((response) => {
                this.transactions = response.data
            }).catch(() => {
                console.log('error')
            })
        },
        save() {
            if (this.formTransaction.id) {
                axios.put(`/transactions/${this.formTransaction.id}`, this.formTransaction).then((response) => {
                    const index = this.transactions.findIndex((item) => item.id === this.formTransaction.id)
                    if (index !== -1) {
                        this.transactions[index] = response.data
                    }
                    this.showForm = false
                }).catch((error) => {

                })
            } else {
                axios.post('/transactions', this.formTransaction).then((response) => {
                    this.transactions.push(response.data)
                    this.showForm = false
                }).catch((error) => {

                })
            }
        },
        async deleteTransaction() {
            try {
                if (this.formTransaction.id) {
                    await axios.delete(`/transactions/${this.formTransaction.id}`);
                    this.transactions = this.transactions.filter((transaction) => transaction.id !== this.formTransaction.id);
                    this.showForm = false;
                } else {
                    console.warn('Невозможно удалить транзакцию без ID');
                }
            } catch (error) {
                console.error('Ошибка удаления транзакции:', error);
            }
        },
    }
})