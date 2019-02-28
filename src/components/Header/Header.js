import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import { Icon } from 'native-base';

function Header (props) {
    return(
        <View style={styles.Header}>
            <TouchableHighlight style={styles.headerMenuButton} onPress={props.showDrawer}>
                <Icon name='reorder' style={{color: 'white'}}/>
            </TouchableHighlight>
            <Text style={styles.headerText}>{props.title}</Text>
            <TouchableHighlight style={styles.headerSearchButton} onPress={props.goToSearchHandler}>
                <Icon name='search' style={{color: 'white'}} />
            </TouchableHighlight>   
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        backgroundColor: 'black',
        padding: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerMenuButton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 30,
        height: 30,
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    headerSearchButton: {
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Header