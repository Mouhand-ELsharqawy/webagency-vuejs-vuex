<template>
      <section class="contact_section layout_padding">
        <div class="container">

        <div class="heading_container">
            <h2>
                Update Customer
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
                        placeholder="First Name"
                        v-model="firstname" >
                    </div>
                    <div>
                        <input 
                        type="text" 
                        placeholder="Middle Name"
                        v-model="middlename">
                    </div>
                    <div>
                        <input 
                        type="text" 
                        placeholder="Last Name"
                        v-model="lastname">
                    </div>
                    <div>
                        <input 
                        type="text" 
                        placeholder="Phone Number"
                        v-model="phone">
                    </div>
                    <div>
                        <input 
                        type="text" 
                        placeholder="Telephone Number"
                        v-model="telephone">
                    </div>
                    <div>
                        <input 
                        type="email" 
                        placeholder="Gmail Address"
                        v-model="gmail">
                    </div>
                    <div>
                        <input 
                        type="email" 
                        placeholder="Facebook Address"
                        v-model="facebook">
                    </div>
                    <div>
                        <input 
                        type="text" 
                        placeholder="Order"
                        v-model="order">
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


        const firstname = ref('')
        const middlename = ref('')
        const lastname = ref('')
        const phone = ref('')
        const telephone = ref('')
        const gmail = ref('')
        const facebook = ref('')
        const order = ref('')

        const handleSubmit = () => {
            const customerdata = {
                firstname: firstname,
                middlename: middlename,
                lastname: lastname,
                phone: phone,
                telephone: telephone,
                gmail: gmail,
                facebook: facebook,
                order: order
            }
            const data = {
                id: id,
                data: customerdata
            }

            store.customerStore.dispatch("updateCustomer", data)
            router.push('/customer')
        }

        return {
            firstname, middlename, lastname, phone, telephone, gmail, facebook, order, handleSubmit
        }
    }
}
</script>

<style>

</style>