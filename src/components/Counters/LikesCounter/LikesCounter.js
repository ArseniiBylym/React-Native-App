import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Icon } from 'native-base';

function LikesCounter(props) {
    return(
        <View style={styles.LikesCounter}>
            <Icon name='star' style={styles.icon} />
            <Text style={styles.text}>{props.amount}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    LikesCounter: {
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

export default LikesCounter