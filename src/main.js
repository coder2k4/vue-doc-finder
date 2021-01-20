
import {createApp , defineAsyncComponent} from 'vue';
import router from "@/router";
import App from "@/App";
import store from "@/store";
import VCard from "@/components/ui/VCard";
import VButton from "@/components/ui/VButton";
import VBadge from "@/components/ui/VBadge";
// import VSpinner from "@/components/ui/VSpinner";
// import VModal from "@/components/ui/VModal";


// Ленивая загрузка компонентов
const VModal = defineAsyncComponent(()=>import('@/components/ui/VModal'))
const VSpinner = defineAsyncComponent(()=>import('@/components/ui/VSpinner'))

const app = createApp(App)

app.use(router)
app.use(store)

app.component('v-card', VCard)
app.component('v-button', VButton)
app.component('v-badge', VBadge)
app.component('v-spinner', VSpinner)
app.component('v-modal', VModal)

app.mount('#app');


