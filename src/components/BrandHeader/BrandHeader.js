import React from 'react';
import {StyleSheet, View, Text, TouchableHighlight} from 'react-native';
import { Icon } from 'native-base';

function BrandHeader (props) {
    return(
        <View style={styles.Header}>
            <Text style={styles.headerText}>X-games</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
})

export default BrandHeader