import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Icon } from 'native-base';

function ViewCounter(props) {
    return(
        <View style={styles.ViewCounter}>
            <Icon name='eye'style={styles.icon} />
            <Text style={styles.text}>{props.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ViewCounter: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    icon: {
        color: 'cadetblue',
        fontSize: 14
    },
    text: {
        fontSize: 14
    }
})

export default ViewCounter