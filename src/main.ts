import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HeaderComponent    from './components/parts/HeaderComponent.vue'
import FooterComponent    from './components/parts/FooterComponent.vue'
import MenuComponent      from './components/parts/MenuComponent.vue'
import FirstViewComponent from './components/parts/FirstViewComponent.vue'
import SwiperComponent    from './components/introduction/SwiperComponent.vue'

const app = createApp(App)

app.use(router)
app.component('HeaderComponent', HeaderComponent)
app.component('FooterComponent', FooterComponent)
app.component('MenuComponent', MenuComponent)
app.component('FirstViewComponent', FirstViewComponent)
app.component('SwiperComponent', SwiperComponent)
app.mount('#app')
