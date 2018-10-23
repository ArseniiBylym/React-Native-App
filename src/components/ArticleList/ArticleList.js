import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import ArticleItem from '../ArticleItem/ArticleItem';

class ArticleList extends Component {
    state ={
        articles: [
            {
                text: 'Article title 1',
                img: require('../../images/articleImage1.jpg'),
                tags: [
                    'winter',
                    'ski',
                    'contest'
                ],
                views: '20',
                likes: '5',
                coments: [
                    {text: 'Some coments 1'},
                    {text: 'Some coments 1'}
                ]
            },
            {
                text: 'Article title 2',
                img: require('../../images/articleImage2.jpg'),
                tags: [
                    'winter',
                    'ski',
                    'sloupstile'
                ],
                views: '15',
                likes: '7',
                coments: [
                    {text: 'Some coments 1'},
                    {text: 'Some coments 1'},
                    {text: 'Some coments 1'}
                ]
            },
            {
                text: 'Article title 3',
                img: require('../../images/articleImage3.jpg'),
                tags: [
                    'winter',
                    'ski',
                    'carving'
                ],
                views: '30',
                likes: '13',
                coments: [
                    
                ]
            },
        ]
    }

    render() {

        // const list = this.state.articles.map((item, i) => {
        //     return <ArticleItem text={item.text} />
        // })
        return(
            <View style={styles.list}>
                <FlatList 
                    data={this.state.articles}
                    renderItem={({item}) => <ArticleItem config={item} />}
                    keyExtractor={(item, index) => item.text}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
        height: '100%',
        paddingBottom: 50
    }
})

export default ArticleList