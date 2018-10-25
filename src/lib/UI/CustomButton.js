import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function CustomButton(props) {
    return(
        <TouchableOpacity onPress={props.onPress}>
            <View style={[styles.view, props.style]} >
                <Text style={[styles.text]}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: 'deepskyblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
    }
})

export default CustomButton