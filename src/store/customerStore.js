import axios from "axios";
import { createStore } from "vuex";


const customerStore = createStore({
    state: () => ({
        customers: [], error: null
    }),
    mutations: {

        getCustomer(state,payload) {
            state.customers = payload
        },
        addCustomer(state,payload) {
            state.customers.push(payload)
        },
        getOneCustomer(state,payload) {
            state.customers = payload
        },
        updateCustomer(state,payload) {
            state.customers = state.customers.splice(state.customers[payload.id],1,payload)
        },
        deleteCustomer(state,payload) {
            state.customers = state.customers.splice(payload,1)
        },
        getError(state,payload) {
            state.error = payload
        }
    },
    actions: {
        async getCustomer({commit}) {
            try{

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await res.data

                commit('getCustomer',data)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async addCustomer({commit},customerdata) {
            try{

                const res = await axios.post('http://localhost:3005/customer',customerdata)
                const data = await res.data

                commit('addCustomer',customerdata)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async getOneCustomer({commit},id) {
            try{

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
                const data = await res.data

                commit('getOneCustomer',data)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async updateCustomer({commit},customerdata) {
            try{

                const res = await axios.patch('http://localhost:3005/customer/'+customerdata.id,customerdata.data)
                const data = await res.data

                commit('updateCustomer',data)
            }catch(error){
                commit('getError',error.message)
            }
        },

        async deleteCustomer({commit},id) {
            try{
                
                await axios.delete('http://localhost:3005/customer/'+id)

                commit('deleteCustomer',id)
            }catch(error){
                commit('getError',error.message)
            }
        }
    }
})

export default customerStore;