import { createApp, type App as VueApp } from 'vue';
import AppRoot from './App.vue';
import { createAppRouter } from './router';

export interface MountOptions {
  element: HTMLElement;
  // Prefix this app is mounted under in the shell, e.g. "/app/app-one".
  // Used as the router's history base so createWebHistory resolves the
  // CURRENT browser URL correctly on first render - no hardcoded
  // navigation to '/' required, and no memory history involved.
  basePath: string;
  getAccessToken?: () => Promise<string>;
  signOut?: () => Promise<void>;
}

export type UnmountFn = () => void;

// This is the contract every app in the platform implements. The shell
// only ever calls mount()/the returned unmount function - it has no
// other knowledge of this app's internals.
export async function mount(options: MountOptions): Promise<UnmountFn> {
  const { element, basePath } = options;

  // Example of using the shared auth context passed down from the
  // shell - a real app would feed this into its API client / auth store.
  if (options.getAccessToken) {
    const token = await options.getAccessToken();
    // eslint-disable-next-line no-console
    console.log('App One received access token from shell:', token);
  }

  const app: VueApp = createApp(AppRoot);
  const router = createAppRouter(basePath);
  app.use(router);

  // Ensure the router has resolved the current URL before mounting,
  // so there's no flash of the wrong route.
  await router.isReady();
  app.mount(element);

  return () => {
    app.unmount();
  };
}
