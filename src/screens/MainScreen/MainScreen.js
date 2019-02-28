import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ArticleList from '../../components/ArticleList/ArticleList';
import { connect } from 'react-redux'
import Constants from '../../lib/constants'
import CustomDrawer from '../../lib/UI/CustomDrawer'


class MainScreen extends Component {
	
	constructor(props) {
        super(props);
        this.refDrawer = React.createRef();
    }

    showDrawer = () => {
        this.refDrawer.current.openDrawer()
    }

    componentDidMount = () => {
        this.props.getAllArticles()
	}

	render() {

		return (
			<CustomDrawer customRef={this.refDrawer}>
				<View style={styles.container}>
					<ArticleList navigation={this.props.navigation} showDrawer={this.showDrawer}/>
				</View>
			</CustomDrawer>
		);
	}
}

mapDispatchToProps = dispatch => {
    return{
        getAllArticles: () => {dispatch({type: Constants.Actions.GET_ARTICLES_LIST_SAGA})}
    }
}

export default connect(null, mapDispatchToProps)(MainScreen)


//styles
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'gray',
		alignItems: 'center',
		justifyContent: 'flex-start',
	}
});