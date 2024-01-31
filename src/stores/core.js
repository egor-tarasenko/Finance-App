import {defineStore} from 'pinia'


export const useCoreStore = defineStore('core', {
    state: () => {
        return {
           state: 'expenses',
        }
    },
    getters: {
    },
    actions: {
    }
})