import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import ArticleItem from '../ArticleItem/ArticleItem';
import Header from '../Header/Header'
import {connect} from 'react-redux'

class ArticleList extends Component {
    state ={
       
    }

    goToArticleHandler = (index) => {
        const { navigate } = this.props.navigation
        navigate('ArticleScreen', {index: index})
    }

    goToSearchHandler = () => {
        const { navigate } = this.props.navigation
        navigate('SearchScreen')
    }

    render() {
        if(!this.props.articles) return <View><Text>Ups..</Text></View>
        return(
            <View style={styles.list}>
                <Header title='Articles' 
                    showDrawer={this.props.showDrawer} 
                    goToSearchHandler={this.goToSearchHandler}
                />
                <FlatList 
                    data={this.props.articles}
                    keyExtractor={(item, index) => item.text}
                    renderItem={({item, index}) => <ArticleItem index={index} 
                                                        goToArticle={this.goToArticleHandler} 
                                                        navigation={this.props.navigation} 
                                                        config={item} />}
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
        flex: 1
        // height: '100%',
        // paddingBottom: 50
    }
})

export default connect(mapStateToProps, null)(ArticleList)