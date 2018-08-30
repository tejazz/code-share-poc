import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import MainList from './main-list';
import { createStore, combineReducers } from 'redux';
import tasksReducer from './reducers/task-reducer';

const rootReducer = combineReducers({
  tasks: tasksReducer
});

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainList />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});