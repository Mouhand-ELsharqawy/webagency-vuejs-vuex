import { createStore } from "vuex";
import axios from "axios"


const contactStore = createStore({
    state: () => ({
        contact:[], error: null
    }),
    mutations: {
        addContact(state,payload) {
            state.contact.push(payload)
        },

        getError(state,payload) {
            state.error = payload
        }
    },
    actions: {
        async addContact({commit},contactdata){
            try{
                
                const res = await axios.post('http://localhost:3005/contact',contactdata)
                const data = await res.data

                commit('addContact',data)

            }catch(error){
                commit('getError', error.message)
            }
        }
    }
})

export default contactStore;