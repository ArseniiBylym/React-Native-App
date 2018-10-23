import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import Header from '../Header/Header';
import ArticleList from '../ArticleList/ArticleList';
import { connect } from 'react-redux'
import Constants from '../../lib/constants'


class MainComponent extends React.Component {

    componentDidMount = () => {
        this.props.getAllArticles()
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

mapDispatchToProps = dispatch => {
    return{
        getAllArticles: () => {dispatch({type: Constants.Actions.GET_ARTICLES_LIST_SAGA})}
    }
}

export default connect(null, mapDispatchToProps)(MainComponent)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
		backgroundColor: 'gray',
		alignItems: 'center',
		justifyContent: 'flex-start',
	}
});