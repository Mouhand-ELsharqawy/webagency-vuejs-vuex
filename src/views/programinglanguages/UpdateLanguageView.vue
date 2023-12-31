<template>
      <section class="contact_section layout_padding">
        <div class="container">

        <div class="heading_container">
            <h2>
                Update Language
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
                        placeholder="Name"
                        v-model="name" >
                    </div>
                    <div>
                        <input 
                        type="text" 
                        placeholder="Type"
                        v-model="type">
                    </div>
                    <div>
                        <input 
                        type="text" 
                        placeholder="Usage"
                        v-model="usage">
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
import { useRoute, useRouter } from 'vue-router'
export default {
    setup(){
        const store = useStore()
        const router = useRouter()
        const route = useRoute()
        const id = route.query.id

        const name = ref('')
        const type = ref('')
        const usage = ref('')

        const handleSubmit = () => {

            const langdata = {
                name: name,
                type: type,
                usage: usage,
            }
            const data = {
                id: id,
                data: langdata
            }

            store.languageStore.dispatch("updateLanguage", data)
            router.push('/language')
        }

        return {
            name, type, usage, handleSubmit
        }
    }
}
</script>

<style>

</style>