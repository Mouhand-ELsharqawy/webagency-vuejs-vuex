import axios from "axios";
import { createStore } from "vuex";


const serviceStore = createStore({
    state: () => ({
        services: [], error: null
    }),
    mutations: {
        getService(state,payload){

        },
        addService(state,payload){

        },
        getOneService(state,payload){

        },
        updateService(state,payload){

        },
        deleteService(state,payload){

        },
        getError(state,payload){

        },
    },
    actions: {
        async getService({commit}){
            try{

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await res.data

                commit('getService',data)
            }catch(error){
                commit('getError',error.message)
            }
        },

        async addService({commit},servicedata){
            try{

                const res = await axios.post('http://localhost:3005/service',servicedata)
                const data = await res.data

                commit('addService',data)
            }catch(error){
                commit('getError',error.message)
            }
        },

        async getOneService({commit},id){
            try{

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
                const data = await res.data

                commit('getOneService',data)
            }catch(error){
                commit('getError',error.message)
            }
        },

        async updateService({commit},servicedata){
            try{

                const res = await axios.get('http://localhost:3005/service/'+servicedata.id,
                servicedata.data)

                const data = await res.data

                commit('updateService',data)
            }catch(error){
                commit('getError',error.message)
            }
        },

        async deleteService({commit},id){
            try{

                await axios.get('http://localhost:3005/service/'+id)

                commit('deleteService',id)
            }catch(error){
                commit('getError',error.message)
            }
        }
    }
})

export default serviceStore;