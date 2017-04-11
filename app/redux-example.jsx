var redux = require('redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

console.log('Starting Redux Example');

// (Un-)Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '"target="new">View Your Location</a>';
  }
});

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Nicholas'));
store.dispatch(actions.changeName('Veronika'));
store.dispatch(actions.addHobby('Gaming'));
store.dispatch(actions.addHobby('Running'));
store.dispatch(actions.removeHobby(2));

// unsubscribe();
store.dispatch(actions.changeName('Emily'));
store.dispatch(actions.addMovie('Mad Max', 'Action'));
store.dispatch(actions.addMovie('Stargate', 'Sci-Fi'));
store.dispatch(actions.removeMovie(1));
