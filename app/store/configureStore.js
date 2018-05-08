import {createStore} from 'redux';
import rootReduce from '../reducers';

export default function configureStore(initialState) {
  debugger
  const store = createStore(rootReduce, initialState,
    // 触发 redux-devtools
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return store
}


