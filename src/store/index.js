import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

// cria o store
const store = createStore(rootReducer);

export default store;
