import axios from "axios";
import { createStore } from "vuex";


const developerStore = createStore({
    state: () => ({
        developers: [] , error: null
    }),
    mutations: {
        getDeveloper(state,payload) {
            state.developers = payload;
        },
        addDeveloper(state,payload) {
            state.developers.push(payload)
        },
        getOneDeveloper(state,payload) {
            state.developers = payload
        },
        updateDeveloper(state,payload) {
            state.developers = state.developers.splice(state.developers[payload.id],1,payload)
        },
        deleteDeveloper(state,payload) {
            state.developers = state.developers.splice(payload,1)
        },
        getError(state,payload) {
            state.error = payload
        },
    },
    actions: {

        async getDeveloper({commit}) {
            try{

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await res.data

                commit('getDeveloper',data)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async addDeveloper({commit},developerdata) {
            try{

                const res = await axios.post('http://localhost:3005/developer',developerdata)
                const data = await res.data
                
                commit('addDeveloper',data)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async getOneDeveloper({commit},id) {
            try{

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
                const data = await res.data
                
                commit('getOneDeveloper',data)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async updateDeveloper({commit}, developerdata) {
            try{
                
                const res = await axios.patch('http://localhost:3005/developer/'+
                developerdata.id,
                developerdata.data)
                const data = await res.data

                commit('updateDeveloper',data)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async deleteDeveloper({commit},id) {
            try{

                await axios.delete('http://localhost:3005/developer/'+id)
                commit('deleteDeveloper',id)

            }catch(error){
                commit('getError',error.message)
            }
        }
    }
})

export default developerStore;