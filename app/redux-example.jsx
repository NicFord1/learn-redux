var redux = require('redux');

console.log('Starting Redux Example');

var stateDefault = {
  name: 'Annonymous',
  hobbies: [],
  movies: []
};
var nextHobbyID = 1, nextMovieID = 1;
var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Annonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {...state, name: action.name};
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id: nextHobbyID++,
            hobby: action.hobby
          }
        ]
      };
      case 'REMOVE_HOBBY':
        return {
          ...state,
          hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
        };
      case 'ADD_MOVIE':
        return {
          ...state,
          movies: [
            ...state.movies,
            {
              id: nextMovieID++,
              title: action.title,
              genre: action.genre
            }
          ]
        };
      case 'REMOVE_MOVIE':
        return {
          ...state,
          movies: state.movies.filter((movie) => movie.id !== action.id)
        };
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
store.dispatch({type: 'ADD_HOBBY', hobby: 'Gaming'});
store.dispatch({type: 'ADD_HOBBY', hobby: 'Running'});
store.dispatch({type: 'REMOVE_HOBBY', id: 2});

// unsubscribe();
store.dispatch({type: 'CHANGE_NAME', name: 'Emily'});
store.dispatch({type: 'ADD_MOVIE', title: 'Mad Max', genre: 'Action'});
store.dispatch({type: 'ADD_MOVIE', title: 'Stargate', genre: 'Sci-Fi'});
store.dispatch({type: 'REMOVE_MOVIE', id: 1});
