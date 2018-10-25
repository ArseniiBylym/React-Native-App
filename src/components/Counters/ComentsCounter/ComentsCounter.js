import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Icon } from 'native-base';

function ComentsCounter(props) {
    return(
        <View style={styles.ComentsCounter}>
                <Icon name='person' style={styles.icon} />
                <Text style={styles.text}>{`${props.amount.length}`}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ComentsCounter: {
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

export default ComentsCounter