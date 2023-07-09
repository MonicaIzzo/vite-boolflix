import { createApp } from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faStar as solidStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as regularStar} from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(solidStar, regularStar)

createApp(App)
.component('FontAwesomeIcon', FontAwesomeIcon)
.mount('#app')
