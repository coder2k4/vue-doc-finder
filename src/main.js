import {createApp} from 'vue';
import router from "@/router";
import App from "@/App";
import store from "@/store";
import VCard from "@/components/ui/VCard";
import VButton from "@/components/ui/VButton";
import VBadge from "@/components/ui/VBadge";


const app = createApp(App)

app.use(router)
app.use(store)

app.component('v-card', VCard)
app.component('v-button', VButton)
app.component('v-badge', VBadge)

app.mount('#app');


