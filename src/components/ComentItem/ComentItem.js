import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import Img from '../../images/anonim.png'

class ComentItem extends Component {
    state = {

    }

    render() {
        return(
            <View style={styles.ComentItem}>
                <View style={styles.userProfile}>
                    <Image style={styles.userImg} source={this.props.config.img} />
                    <View style={styles.userName}>
                        <Text style={styles.userName_text}>{this.props.config.author}</Text>
                    </View>
                    <View style={styles.date}>
                        <Text style={styles.dateItem}>{this.props.config.date}</Text>
                    </View>
                </View>
                <View style={styles.mainText}>
                    <Text style={styles.mainText_text}>{this.props.config.text}</Text>
                </View>
            </View>
        )
    }
}

export default ComentItem

const styles = StyleSheet.create({
    ComentItem: {
        width: '100%',
        borderBottomColor: 'rgba(0,0,0,.5)',
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    userProfile: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    userImg: {
        width: 20,
        height: 20,
        borderRadius: 10
    },
    userName: {
        marginLeft: 5
    },
    date: {
        marginLeft: 'auto'
    },
    mainText: {
        paddingHorizontal: 10,
        paddingVertical: 30
    }
})