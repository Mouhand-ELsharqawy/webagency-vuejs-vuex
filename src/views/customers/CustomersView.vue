<template>
     <section class="client_section" v-if="customers">
    <div class="container" v-if="customers.length > 0">
      <div class="heading_container">
        <h2>
          All Customers 
        </h2>
      </div>
      <div class="carousel-wrap">
        
        <customer-list :data={} />
      </div>
    </div>
    <div v-else>
        OOooops there's no data yet 
    </div>
  </section>

  <section class="client_section" v-else-if="error">
      {{  error }}
  </section>
  <section class="client_section" v-else>
      loading...
  </section>

</template>

<script>
import CustomerList from '@/components/CustomerList.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  components: { CustomerList },
    setup(){
      const store = useStore()

      onMounted(() => {
        store.customerStore.dispatch("getCustomer")
      })
      
      const customers = computed(() => {
        return store.customerStore.state.customers
      })

      const error = computed(() => {
        return store.customerStore.state.error
      })

      return {
        customers,
        error
      }
    }
}
</script>

<style>

</style>