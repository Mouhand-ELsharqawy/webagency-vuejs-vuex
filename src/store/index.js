import { createStore } from 'vuex'
import contactStore from './contactStore'
import customerStore from './customerStore'
import developerStore from './developerStore'
import proglanguageStore from './proglanguageStore'
import serviceStore from './serviceStore'
import testimonialStore from './testimonialStore'

export default createStore({
  modules: {
    contactStore,
    customerStore,
    developerStore,
    proglanguageStore,
    serviceStore,
    testimonialStore
  }
})
