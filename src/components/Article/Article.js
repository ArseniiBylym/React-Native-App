import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList, Image } from 'react-native';
import Header from '../Header/Header'
import { Icon } from 'native-base';
import { connect } from 'react-redux'
import ViewCounter from '../Counters/ViewCounter/ViewCounter'
import LikesCounter from '../Counters/LikesCounter/LikesCounter'
import ComentsCounter from '../Counters/ComentsCounter/ComentsCounter'

class Article extends Component{

    static navigationOptions = {
        
        headerTitle: <Header title='Article'/>,
        // headerLeft: (
        //     <Icon name='add' style={{color: 'white', backgroundColor: 'black'}} />
        // )
	  };

    state = {

    }

    componentDidMount = () => {
        let index = this.props.navigation.getParam('index')
        this.setState({
            currentArticle: {
                ...this.props.articles[index]
            }
        })
    }

    render() {
        if(!this.state.currentArticle) return null
        const { navigation } = this.props;
        const index = navigation.getParam('index')
        return(
            <View style={styles.Article}>
                <ScrollView style={styles.mainWrapper}>
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{this.state.currentArticle.text}</Text>
                    </View>
                    <Image style={styles.image} source={this.state.currentArticle.img} />
                    <View style={styles.mainTextWrapper}>
                        <Text style={styles.mainText}>{this.state.currentArticle.mainText}</Text>
                    </View>
                    <View style={styles.attributes}>
                        <View style={styles.attributesItem}>
                            <Icon name='eye' style={styles.icon} />
                            <Text style={styles.attributesText}>{this.state.currentArticle.views}</Text>
                        </View>
                        <View style={styles.attributesItem}>
                            <Icon name='star' style={styles.icon} />
                            <Text style={styles.attributesText}>{this.state.currentArticle.likes}</Text>
                        </View>
                        <View style={styles.attributesItem}>
                            <Icon name='person' style={styles.icon} />
                            <Text style={styles.attributesText}>{`${this.state.currentArticle.coments.length}`}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Article: {
        alignItems: 'center'
    },
    mainWrapper: {
        backgroundColor: 'black'
    },
    titleWrapper: {
        padding: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }, 
    image: {
        width: '100%',
        height: 250
    },
    mainTextWrapper: {
        backgroundColor: 'black',
        padding: 20
    },
    mainText: {
        color: 'white',
        fontSize: 12
    },
    attributes: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'rgba(255,255,255,.5)',
        marginBottom: 10,
        paddingTop: 5,
        paddingBottom: 5
    },
    attributesItem: {
        flex: 1,
        borderRightColor: 'black',
        borderLeftColor: 'black',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: 'white',
        fontSize: 18
    },
    attributesText: {
        color: 'white',
        fontSize: 16
    }
})

mapStateToProps = state => {
    return{
        articles: state.articles.articles_list
    }
}

export default connect(mapStateToProps, null)(Article)