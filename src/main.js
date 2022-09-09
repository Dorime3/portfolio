import { createApp } from 'vue'
import App from './App.vue'
import WOW from "wow.js/src/WOW";
import 'animate.css';


new WOW().init();
createApp(App).mount('#app')

