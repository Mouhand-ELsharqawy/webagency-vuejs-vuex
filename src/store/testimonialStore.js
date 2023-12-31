import axios from "axios";
import { createStore } from "vuex";


const testimonialStore = createStore({
    state: () => ({
        testimonials: [], error: null
    }),
    mutations: {
        getTestimonial(state,payload){
            state.testimonials = payload
        },
        getError(state,payload){
            state.error = payload
        },
    },
    actions: {
        async getTestimonial({commit}){
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await res.data
                commit('getTestimonial',data)
            }catch(error){
                commit('getError',error.message)
            }
        }
    }
})

export default testimonialStore;