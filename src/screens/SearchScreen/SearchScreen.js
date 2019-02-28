import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import Header from '../../components/Header/Header'
import CustomDrawer from '../../lib/UI/CustomDrawer'
import CustomButton from '../../lib/UI/CustomButton'


class SearchScreen extends Component {

    constructor(props) {
        super(props);
        this.refDrawer = React.createRef();
    }

    showDrawer = () => {
        this.refDrawer.current.openDrawer()
    }

    render() {
        const coments = this.props.navigation.getParam('coments')
        return(
            <CustomDrawer customRef={this.refDrawer}>
                <View style={styles.Search}>
                    <Header title='Search' showDrawer={this.showDrawer}/>
                    <Text>Search something...</Text>
                </View>
            </CustomDrawer>
        )
    }
}

const styles = StyleSheet.create({
    Search: {
        width: '100%',
        flex: 1,
    },
})

export default SearchScreen