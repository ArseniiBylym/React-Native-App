import React from 'react';
import { createStackNavigator  } from 'react-navigation';
// import { StackNavigator } from 'react-navigation'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/store/reducers/reducers.js';
import rootSaga from './src/store/sagas/sagas.js';
import MainComponent from './src/components/MainComponent/MainComponent.js'
import Article from './src/components/Article/Article.js'


const sagaMiddleware = createSagaMiddleware()
let store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const Navigator = createStackNavigator({
	MainComponent: {screen: MainComponent},
	Article: {screen: Article}
},{
	initialRouteName: 'MainComponent'
})

class App extends React.Component {
	render() {
		return (
			<Provider store={store} >
				<Navigator />
			</Provider>
		);
	}
}

export default App