import { createStore } from 'redux';

import rootReducer from './modules/rootReducer';

// integrando o redux com o reactotron
const enhancer =
  process.env.NODE_ENV === 'development' ? console.tron.createEnhancer() : null;

// cria o store
const store = createStore(rootReducer, enhancer);

export default store;
