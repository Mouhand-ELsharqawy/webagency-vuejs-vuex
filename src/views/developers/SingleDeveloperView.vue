<template>
        <section class="client_section" >
    <div class="container">
      
      <div class="carousel-wrap">
         <div class="clientbox">
              <div class="img-box">
                <img src="../assets/images/c-1.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Developer: Tempor incididunt <br>
                  <span>
                    Dipiscing elit
                  </span>
                </h5>
                <img class="img" src="../assets/images/quote.png" alt="">
                <p>
                  Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
                <div style="display: flex">
                 <router-link :to="{ name: 'updatedeveloper', query: { id: developer.id } }">
                  <button type="button" class="btn btn-primary">
                    Update Developer
                  </button>
                </router-link>
                 <button 
                  type="button" 
                    class="btn btn-danger"
                      @click="handleDelete">
                        Delete Developer
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
            store.developerStore.dispatch("getOneDeveloper",id)
        }) 

        const developer = computed(() => {
            return store.developerStore.state.developers
            
        })

        const handleDelete = () => {
            store.developerStore.dispatch("deleteDeveloper",id)
            router.push('/developer')
        }

        return {
            handleDelete, developer
        }

    }
}
</script>

<style>

</style>