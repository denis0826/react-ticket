import { createStore, combineReducers } from 'redux';
import ticketsReducer from '../reducers/tickets';

export default () => {
  // Store Creation  
  const store = createStore(
    combineReducers({
      tickets: ticketsReducer
    })
  );
  return store
}

