import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import ArticleItem from '../ArticleItem/ArticleItem';
import {connect} from 'react-redux'

class ArticleList extends Component {
    state ={
       
    }

    goToArticleHandler = (index) => {
        const { navigate } = this.props.navigation
        navigate('Article', {index: index})
    }

    render() {
        if(!this.props.articles) return <View><Text>Ups..</Text></View>
        return(
            <View style={styles.list}>
                <FlatList 
                    data={this.props.articles}
                    renderItem={({item, index}) => <ArticleItem index={index} goToArticle={this.goToArticleHandler} navigation={this.props.navigation} config={item} />}
                    keyExtractor={(item, index) => item.text}
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        articles: state.articles.articles_list
    }
}

const styles = StyleSheet.create({
    list: {
        width: '100%',
        height: '100%',
        // paddingBottom: 50
    }
})

export default connect(mapStateToProps, null)(ArticleList)