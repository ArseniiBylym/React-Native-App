import React from 'react';
// import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
// import Header from './src/components/Header/Header';
// import ArticleList from './src/components/ArticleList/ArticleList';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/store/reducers/reducers.js';
import rootSaga from './src/store/sagas/sagas.js';
import MainComponent from './src/components/MainComponent/MainComponent.js'


const sagaMiddleware = createSagaMiddleware()
let store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default class App extends React.Component {

	render() {
		return (
			<Provider store={store} >
				<MainComponent />
			</Provider>
		);
	}
}
