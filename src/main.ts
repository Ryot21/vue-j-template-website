import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import HeaderComponent   from './components/HeaderComponent.vue'
import FooterComponent   from './components/FooterComponent.vue'
import MenuComponent     from './components/MenuComponent.vue'
import TopFviewComponent from './components/TopFviewComponent.vue'

const app = createApp(App)

app.use(router)
app.component('HeaderComponent', HeaderComponent)
app.component('MenuComponent', MenuComponent)
app.component('FooterComponent', FooterComponent)
app.component('TopFview', TopFviewComponent)
app.mount('#app')
