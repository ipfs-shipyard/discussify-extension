import createExtensionClient from './extension-client';
import { renderApp } from './slices/authentication';

const rootEl = document.getElementById('root');
const extensionClient = createExtensionClient();

renderApp(rootEl, extensionClient);
