// Standalone bootstrap - only used for local `npm run dev` testing
// of this app on its own, outside the shell. Not part of the
// remoteEntry.js build the shell consumes.
import { createApp } from 'vue';
import App from './App.vue';
import { createAppRouter } from './router';

const app = createApp(App);
app.use(createAppRouter('/'));
app.mount('#app');
