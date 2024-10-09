import './css/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import { FaEye, FaEyeSlash } from "oh-vue-icons/icons";

const app = createApp(App);

addIcons(FaEye, FaEyeSlash);

app.component("v-icon", OhVueIcon);
app.mount('#app');

export default {
    components: {
      "v-icon": OhVueIcon
    }
};