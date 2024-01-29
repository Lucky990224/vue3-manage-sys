import { defineStore } from 'pinia'

export const UsersStore = defineStore('users', {
    
  state: () => ({
    count: 0,
  }),

  getters: {

  },
  
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})
