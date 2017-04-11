var redux = require('redux');

console.log('Starting Redux ToDo Example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  toDos: []
};
var reducer = (state = stateDefault, action) => {
  return state;
};
var store = redux.createStore(reducer);
console.log('currentState: ', store.getState());
