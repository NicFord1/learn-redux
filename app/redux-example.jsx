var redux = require('redux');

console.log('Starting Redux Example');

// Name Reducer & Action Generators
// --------------------------------
var nameReducer = (state = 'Annonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME': return action.name;
    default: return state;
  }
};
var changeName = (name) => {
  return {type: 'CHANGE_NAME', name};
};

// Hobbies Reducer & Action Generators
// -----------------------------------
var nextHobbyID = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY': return [...state, {id: nextHobbyID++, hobby: action.hobby}];
    case 'REMOVE_HOBBY': return state.filter((hobby) => hobby.id !== action.id);
    default: return state;
  }
};
var addHobby = (hobby) => {
  return {type: 'ADD_HOBBY', hobby};
};
var removeHobby = (id) => {
  return {type: 'REMOVE_HOBBY', id};
};

// Movies Reducer & Action Generators
// ----------------------------------
var nextMovieID = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE': return [...state, {id: nextMovieID++, title: action.title, genre: action.genre}];
    case 'REMOVE_MOVIE': return state.filter((movie) => movie.id !== action.id);
    default: return state;
  }
};
var addMovie = (title, genre) => {
  return {type: 'ADD_MOVIE', title, genre};
};
var removeMovie = (id) => {
  return {type: 'REMOVE_MOVIE', id};
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// (Un-)Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  document.getElementById('app').innerHTML = state.name;
});

store.dispatch(changeName('Nicholas'));
store.dispatch(changeName('Veronika'));
store.dispatch(addHobby('Gaming'));
store.dispatch(addHobby('Running'));
store.dispatch(removeHobby(2));

// unsubscribe();
store.dispatch(changeName('Emily'));
store.dispatch(addMovie('Mad Max', 'Action'));
store.dispatch(addMovie('Stargate', 'Sci-Fi'));
store.dispatch(removeMovie(1));
