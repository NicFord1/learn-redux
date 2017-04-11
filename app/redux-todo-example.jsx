var redux = require('redux');

console.log('Starting Redux ToDo Example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  toDos: []
};
var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {...state, searchText: action.searchText};
    case 'CHANGE_SHOW_COMPLETED':
      return {...state, showCompleted: action.showCompleted};
    case 'CHANGE_TODOS':
      return {...state, toDos: action.toDos};
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
  document.getElementById('app').innerHTML = state.searchText;
});

store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'show'});
store.dispatch({type: 'CHANGE_SHOW_COMPLETED', showCompleted: true});
store.dispatch({type: 'CHANGE_TODOS', toDos: ['learn git', 'learn react', 'learn redux']});

store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'learn'});
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'walk'});
store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'buy'});
