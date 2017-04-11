var redux = require('redux');

console.log('Starting Redux Example');

var reducer = (state = {name: 'Annonymous'}, action) => {
  // state = state || {name: 'Annonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.name};
    default:
      return state;
  }
};
var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('currentState: ', currentState);

store.dispatch({type: 'CHANGE_NAME', name: 'Nicholas'});
console.log('currentState: ', store.getState());
