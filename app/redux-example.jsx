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
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// (Un-)Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.name;
});

store.dispatch({type: 'CHANGE_NAME', name: 'Nicholas'});
store.dispatch({type: 'CHANGE_NAME', name: 'Veronika'});
// unsubscribe();
store.dispatch({type: 'CHANGE_NAME', name: 'Emily'});
