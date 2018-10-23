import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Header from './src/components/Header/Header';
import ArticleItem from './src/components/ArticleItem/ArticleItem';
import ArticleList from './src/components/ArticleList/ArticleList';
// import { observable } from 'mobx';
// import {observer} from 'mobx-react/native';

// @observer
export default class App extends React.Component {

	// @observable store = {
	//   inputText: ''
	// }
	state = {
		inputText: '',
		list: [
		
		]
	}

	onInputChangeHandler = (value) => {
		this.setState({
			inputText: value
		})
	}

	onButtonPressHandler = () => {
		if (this.state.inputText.trim()) {
			this.setState((prevState) => {
				return {
					inputText: '',
					list: prevState.list.concat(prevState.inputText)
				}
			})
		}
	}

	render() {
		
		return (
			
			<View style={styles.container}>
				<Header />
				<ArticleList />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: 'gray',
		alignItems: 'center',
		justifyContent: 'flex-start',
	}
});
