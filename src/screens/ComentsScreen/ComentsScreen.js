import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import Header from '../../components/Header/Header'
import ComentItem from '../../components/ComentItem/ComentItem';
import CustomDrawer from '../../lib/UI/CustomDrawer'

class ComentsScreen extends Component {
    render() {
        const coments = this.props.navigation.getParam('coments')
        return(
            <CustomDrawer>
                <View style={styles.Coments}>
                    <Header title='Coments' />
                    <FlatList 
                        data={coments}
                        keyExtractor={(item, index) => item.author}
                        renderItem={({item}) => <ComentItem config={item} />}
                        />
                </View>
            </CustomDrawer>
        )
    }
}

const styles = StyleSheet.create({
    Coments: {
        width: '100%',
        flex: 1,
    },
})

export default ComentsScreen