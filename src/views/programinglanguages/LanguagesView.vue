<template>
  <section class="client_section" v-if="languages">
    <div class="container" v-if="languages.length > 0">
      <div class="heading_container">
        <h2>
          All Languages
        </h2>
      </div>
      <div class="carousel-wrap">
            <language-list :data={} />
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
import LanguageList from '@/components/LanguageList.vue'
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'
export default {
  components: { LanguageList },
  setup() {
    const store = useStore()

    onMounted(() => {
      store.proglanguageStore.dispatch("getLanguage")
    })

    const languages = computed(() => {
      return store.proglanguageStore.state.langs
    })

    const error = computed(() => {
      return store.proglanguageStore.state.error
    })

    return {
      languages,
      error
    }
  }

}
</script>

<style>

</style>