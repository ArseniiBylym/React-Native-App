import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

function CustomButton(props) {
    return(
        <TouchableOpacity style={styles.wrapper} onPress={props.onPress}>
            <View style={[styles.view, props.style]} >
                {props.icon && <Image source={props.icon} style={styles.icon} />}
                <Text style={[styles.text]}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',

    },
    view: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 5,
        backgroundColor: 'deepskyblue',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: {
        width: 16,
        height: 16,
        marginRight: 5
    },
    text: {
        fontSize: 16,
    }
})

export default CustomButton