<template>
   <section class="client_section">
    <div class="container">
      
      <div class="carousel-wrap">
         <div class="clientbox">
              <div class="img-box">
                <img src="../assets/images/c-1.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Customer: Tempor incididunt <br>
                  <span>
                    Dipiscing elit
                  </span>
                </h5>
            
                <p>
                  Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
                <div style="display: flex"> 
                <router-link :to="{ name: 'updatecustomer', query: { id: customer.id } }">
                  <button type="button" class="btn btn-primary">
                    Update Customer
                  </button>
                </router-link>
                 <button 
                  type="button" 
                    class="btn btn-danger"
                      @click="handleDelete">
                        Delete Customer
                  </button>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>
</template>


<script>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const router = useRouter()
        const route = useRoute()

        const id = route.query.id

        onMounted(() => {
            store.customerStore.dispatch("getOneCustomer",id)
        }) 

        const customer = computed(() => {
            return store.customerStore.state.customers
        })

        const handleDelete = () => {
            store.customerStore.dispatch("deleteCustomer",id)
             router.push('/customer')
        }

        return {
            handleDelete, customer
        }

    }
}
</script>

<style>

</style>