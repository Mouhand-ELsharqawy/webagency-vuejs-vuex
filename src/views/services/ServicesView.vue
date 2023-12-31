<template>
  <section class="client_section" v-if="services">
    <div class="container" v-if="services.length > 0">
      <div class="heading_container">
        <h2>
          All Services
        </h2>
      </div>
      <div class="carousel-wrap">
            <service-list :data={} />
      </div>
    </div>
    <div v-else>
      Ooooops there's no data yet
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
import ServiceList from '@/components/ServiceList.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  components: { ServiceList },
  setup(){
    const store = useStore()

    onMounted(() => {
      store.serviceStore.dispatch("getService")
    })

    const services = computed(() => {
      return store.serviceStore.state.services
    })
    const error = computed(() => {
      return store.serviceStore.state.error
    })

    return {
      services,
      error
    }
  }

}
</script>

<style>

</style>