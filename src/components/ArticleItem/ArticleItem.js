import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Tag from '../Tag/Tag'
import ViewCounter from '../Counters/ViewCounter/ViewCounter'
import LikesCounter from '../Counters/LikesCounter/LikesCounter'
import ComentsCounter from '../Counters/ComentsCounter/ComentsCounter'

function ArticleItem(props) {

    const tags = props.config.tags.map((item, i) => (
        <Tag tagName={item} key={item} />
    ))


    return(
        <TouchableOpacity style={styles.ArticleItem} onPress={props.goToArticle.bind(this, props.index)}>
            <Image style={styles.image} source={props.config.img} />
            <View style={styles.info}>
                <View style={styles.description}>
                    <Text style={styles.title}>{props.config.text}</Text>
                    <View style={styles.tagContainer}>
                        {tags}
                    </View>
                </View>
                <View style={styles.data}>
                    <ViewCounter amount={props.config.views}/>
                    <LikesCounter amount={props.config.likes}/>
                    <ComentsCounter amount={props.config.coments}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ArticleItem: {
        width: '100%',
        padding: 5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: 200,

    },
    info: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
    },
    description: {
        width: '90%'
    },
    data :{
        width: '10%'
    },
    title: {
        paddingBottom: 5,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold'

    },
    tagContainer: {
        display: 'flex',
        flexDirection: 'row'
    }
})

export default ArticleItem