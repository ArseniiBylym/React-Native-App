import React from 'react';
import { createStackNavigator  } from 'react-navigation';
import {StyleSheet, View} from 'react-native'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './src/store/reducers/reducers.js';
import rootSaga from './src/store/sagas/sagas.js';
import MainScreen from './src/screens/MainScreen/MainScreen.js'
import ArticleScreen from './src/screens/ArticleScreen/ArticleScreen.js'
import ComentsScreen from './src/screens/ComentsScreen/ComentsScreen.js'


const sagaMiddleware = createSagaMiddleware()
let store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export const Navigator = createStackNavigator(
	{
		MainScreen: {screen: MainScreen},
		ArticleScreen: {screen: ArticleScreen},
		ComentsScreen: {screen: ComentsScreen}
	},
	{
		initialRouteName: 'MainScreen',
		navigationOptions: {
			header: null,
		  },
	}
)

class App extends React.Component {
	render() {
		return (
			<Provider store={store} >
				<View style={styles.mainWrapper}>
					<Navigator />
				</View>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	mainWrapper: {
		flex: 1,
		marginTop: 23,
		marginBottom: 0
	}
})

export default App