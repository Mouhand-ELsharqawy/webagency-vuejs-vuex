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
                  Language: Tempor incididunt <br>
                  <span>
                    Dipiscing elit
                  </span>
                </h5>
                <img class="img" src="../assets/images/quote.png" alt="">
                <p>
                  Dipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                </p>
                <div style="display: flex">
                 <router-link :to="{ name: 'updatelanguage', query: { id: language.id } }">
                  <button type="button" class="btn btn-primary">
                    Update Programing Language
                  </button>
                </router-link>
                 <button 
                  type="button" 
                    class="btn btn-danger"
                      @click="handleDelete">
                        Delete Programing Language 
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
            store.proglanguageStore.dispatch("getOneLanguage",id)
        }) 

        const language = computed(() => {
            return store.proglanguageStore.state.langs
            
        })

        const handleDelete = () => {
            store.proglanguageStore.dispatch("deleteLanguage",id)
            router.push('/language')
        }

        return {
            handleDelete, language
        }

    }
}
</script>

<style>

</style>