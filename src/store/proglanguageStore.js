import axios from "axios";
import { createStore } from "vuex";


const proglanguageStore = createStore({
    state: () => ({
        langs: [], error: null
    }),
    mutations: {
        getLanguage(state,payload) {
            state.langs = payload
        },
        addLanguage(state,payload) {
            state.langs.push(payload)
        },
        getOneLanguage(state,payload) {
            state.langs = payload
        },
        updateLanguage(state,payload) {
            state.langs = state.langs.splice(state.langs[payload.id],1,payload)
        },
        deleteLanguage(state,payload) {
            state.langs = state.langs.splice(payload,1)
        },
        getError(state,payload) {
            state.error = payload
        }

    },
    actions: {

        async getLanguage({commit}) {
            try{

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await res.data
                
                commit('getLanguage',data)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async addLanguage({commit},languagedata) {
            try{

                const res = await axios.post('http://localhost:3005/language',languagedata)
                const data = await res.data
                
                commit('addLanguage',data)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async getOneLanguage({commit},id) {
            try{

                const res = await axios.get('https://jsonplaceholder.typicode.com/posts'+id)
                const data = await res.data
                
                commit('getOneLanguage',data)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async updateLanguage({commit},languagedata) {
            try{

                const res = await axios.patch('http://localhost:3005/language/'+languagedata.id
                ,languagedata.data)
                const data = await res.data
                
                commit('updateLanguage',data)

            }catch(error){
                commit('getError',error.message)
            }
        },

        async deleteLanguage({commit},id) {
            try{

                await axios.delete('http://localhost:3005/language/'+id)
                
                commit('deleteLanguage',id)

            }catch(error){
                commit('getError',error.message)
            }
        }
    }
})

export default proglanguageStore;