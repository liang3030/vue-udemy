import { createApp } from 'vue';
import App from './App.vue';
import FrinedContact from './components/FriendContact.vue';

const app = createApp(App);

app.component('friend-contact', FrinedContact);

app.mount('#app');
