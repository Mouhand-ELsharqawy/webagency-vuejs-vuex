<template>
     <section class="client_sectio">
    <div class="container">
      
      <div class="carousel-wrap">
         <div class="clientbox">
              <div class="img-box">
                <img src="../assets/images/c-1.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Service: Tempor incididunt <br>
                  <span>
                    Dipiscing elit
                  </span>
                </h5>
                <img class="img" src="../assets/images/quote.png" alt="">
                <p>
                  Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
                <div style="display: flex">
                  <router-link :to="{ name: 'updateservice', query: { id: service.id } }">
                    <button type="button" class="btn btn-primary">
                      Update Service
                    </button>
                  </router-link>
                  <button 
                  type="button" 
                    class="btn btn-danger"
                      @click="handleDelete">
                        Delete Service
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
            store.serviceStore.dispatch("getOneService",id)
        }) 

        const service = computed(() => {
            return store.serviceStore.state.services
        })

        const handleDelete = () => {
            store.serviceStore.dispatch("deleteService",id)
            router.push('/service')
        }

        return {
            service, handleDelete
        }

    }
}
</script>

<style>

</style>