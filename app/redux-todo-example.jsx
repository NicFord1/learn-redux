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
var store = redux.createStore(reducer);
console.log('currentState after store creation: ', store.getState());

store.dispatch({type: 'CHANGE_SEARCH_TEXT', searchText: 'show'});
console.log('currentState after change searchText: ', store.getState());

store.dispatch({type: 'CHANGE_SHOW_COMPLETED', showCompleted: true});
console.log('currentState after change showCompleted: ', store.getState());

store.dispatch({type: 'CHANGE_TODOS', toDos: ['learn git', 'learn react', 'learn redux']});
console.log('currentState after change toDos: ', store.getState());
