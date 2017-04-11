var redux = require('redux');

console.log('Starting Redux Example');

var reducer = (state = {name: 'Annonymous'}, action) => {
  // state = state || {name: 'Annonymous'};
  return state;
};
var store = redux.createStore(reducer);
var currentState = store.getState();
console.log('currentState: ', currentState);
