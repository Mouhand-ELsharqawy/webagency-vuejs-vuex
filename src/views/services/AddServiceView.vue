<template>
      <section class="contact_section layout_padding">
        <div class="container">

        <div class="heading_container">
            <h2>
                Add Service
            </h2>
        </div>
        <div class="">
            <div class="">
            <div class="row">
                <div class="col-md-9 mx-auto">
                <div class="contact-form">
                    <form @submit.prevent="handleSubmit">
                    <div>
                        <input 
                        type="text"
                        placeholder="Project Name"
                        v-model="project" >
                    </div>
                    <div>
                        <input 
                        type="text" 
                        placeholder="Type"
                        v-model="type">
                    </div>
                    <div>
                        <input 
                        type="number" 
                        placeholder="Salary"
                        v-model="salary">
                    </div>
                     <div>
                        <input 
                        type="text" 
                        placeholder="Start Date"
                        v-model="start">
                    </div>
                     <div>
                        <input 
                        type="text" 
                        placeholder="End Date"
                        v-model="end">
                    </div>
                  
                    
                    <div class="d-flex justify-content-center">
                        <button type="submit" class="btn_on-hover">
                            Submit
                        </button>
                    </div>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    setup(){
        const store = useStore()
        const router = useRouter()

        const project = ref('')
        const type = ref('')
        const salary = ref()
        const start = ref('')
        const end = ref('')

        const handleSubmit = () => {
            
            const servicedata = {
                project: project,
                type: type,
                salary: salary,
                start: start,
                end: end
            }

            store.serviceStore.dispatch("addService",servicedata)
            router.push('/service')

        }

        return {
            project, type, salary, start, end, handleSubmit
        }

    }
}
</script>

<style>

</style>