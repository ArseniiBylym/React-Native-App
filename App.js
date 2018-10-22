import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
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
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
			{name: 'hello', key: Math.random()},{name: 'hello', key: Math.random()},
		]
	}

	onInputChangeHandler = (value) => {
		this.setState({
			inputText: value
		})
	}

	onButtonPressHandler = () => {
		if (this.state.inputText.trim()) {
			// alert(this.state.inputText + ' was successfuly added!')
			this.setState((prevState) => {
				return {
					inputText: '',
					list: prevState.list.concat(prevState.inputText)
				}
			})
		}
	}

	render() {

		// let list = this.state.list.map((item, i) => {
		// 	return <Text style={styles.usersList} key={item}>{item}</Text>
		// })
		let newData = this.state.list.slice()
		
		return (
			
			<View style={styles.container}>
				<ScrollView style={{width: '100%'}}>
				<View style={styles.headerWrapper}>
					<Text style={styles.header}>React Native App</Text>
				</View>
				<Text> Some random text: {this.state.inputText}</Text>
				{/* <View style={styles.inputWrapper}> */}
				<TextInput
					style={styles.inputText}
					value={this.state.inputText}
					placeholder='Enter some text here'
					onChangeText={this.onInputChangeHandler} />
				{/* </View> */}
				<Button title='Add button' onPress={this.onButtonPressHandler} />
				<FlatList
					data={this.state.list} 
					keyExtractor={(item, index) => item.key+''}
					renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
				/>
			</ScrollView>
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
	},
	headerWrapper: {
		alignSelf: 'stretch',
		backgroundColor: 'white',
		// width: 100,
		padding: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 10,
	},
	header: {
		fontSize: 20,
		color: 'black',
		// fontWieght: 'bold',
	},
	inputWrapper: {
		marginTop: 10,
		marginRight: 20,
		marginLeft: 20,
		marginBottom: 10,
		backgroundColor: 'red',
		alignSelf: 'stretch'
	},
	inputText: {
		marginTop: 10,
		marginRight: 20,
		marginLeft: 20,
		marginBottom: 10,
		backgroundColor: 'white',
		alignSelf: 'stretch',
		padding: 20,
		// fontSize: 16
		// textDecoration: 'none'
	},
	usersList: {
		marginTop: 5,
		marginLeft: 10,
		color: 'white',
		alignSelf: 'flex-start'
	}
});
