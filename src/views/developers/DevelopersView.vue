<template>
     <section class="client_section" v-if="developers">
    <div class="container" v-if="developers.length> 0">
      <div class="heading_container">
        <h2>
          All Developers 
        </h2>
      </div>
      <div class="carousel-wrap">
            <developer-list :data={} />
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
import DeveloperList from '@/components/DeveloperList.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  components: { DeveloperList },
  setup(){
    const store = useStore()
    
    onMounted(() => {
      store.developerStore.dispatch("getDeveloper")
    })

    const developers = computed(() => {
      return store.developerStore.state.developers
    })
    const error = computed(() => {
      return store.developerStore.state.error
    })

    return {
      developers,
      error
    }
  }
}
</script>

<style>

</style
DeveloperList>