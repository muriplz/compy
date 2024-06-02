import './assets/styles/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from "@/components/router/index.js";
import {Cafe32, CarbonIconsVue, Contrast32, Laptop32, Moon32, Sun32} from '@carbon/icons-vue';

createApp(App)
    .use(
        CarbonIconsVue,
        {
            components: {
                Moon: Moon32,
                Sun: Sun32,
                Cafe: Cafe32,
                Contrast: Contrast32,
                Laptop: Laptop32
            }
        }
    )
    .use(router)
    .mount('#app');
