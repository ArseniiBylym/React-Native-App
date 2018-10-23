import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Icon } from 'native-base';

function Header (props) {
    return(
        <View style={styles.Header}>
            <View style={styles.headerMenuButton}>
                <Icon name='reorder' style={{color: 'white'}}/>
            </View>
            <Text style={styles.headerText}>Articles</Text>
            <View style={styles.headerSearchButton}>
                <Icon name='search' style={{color: 'white'}} />
            </View>   
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
        alignItems: 'center'
    }
})

export default Header