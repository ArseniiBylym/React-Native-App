import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

function Tag(props) {
    return (
        <View style={styles.Tag}>
            <Text style={styles.text}>{props.tagName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Tag: {
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 5
    },
    text: {
        color: 'black',
        fontSize: 10,
        padding: 3,
        backgroundColor: 'white'
    }
})

export default Tag