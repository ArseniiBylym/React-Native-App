import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, Button, ScrollView, FlatList, Image, TouchableOpacity } from 'react-native';
import Header from '../../components/Header/Header'
import { Icon } from 'native-base';
import { connect } from 'react-redux'
import CustomDrawer from '../../lib/UI/CustomDrawer'

class ArticleScreen extends Component{

    state = {

    }

    goToComents = (index) => {
        const { navigate } = this.props.navigation
        navigate('ComentsScreen', {coments: this.state.currentArticle.coments})
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
            <CustomDrawer>
                <View style={styles.Article}>
                    <Header title={`Article ${index + 1}`} />
                    <ScrollView style={styles.mainWrapper}>
                        <ImageBackground style={styles.image} source={this.state.currentArticle.img}>
                            <View style={styles.titleWrapper}>
                                <Text style={styles.title}>{this.state.currentArticle.text}</Text>
                            </View>
                        </ImageBackground>
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
                            <TouchableOpacity style={styles.attributesItem} onPress={this.goToComents}>
                                <View style={styles.attributesItem__innerWrapper}>
                                    <Icon name='person' style={styles.icon} />
                                    <Text style={styles.attributesText}>{`${this.state.currentArticle.coments.length}`}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </CustomDrawer>
        )
    }
}

const styles = StyleSheet.create({
    Article: {
        alignItems: 'center',
        width: '100%',
        flex: 1
    },
    mainWrapper: {
        backgroundColor: 'black',
    },
    gradientWrapper: {
        width: '100%',
        padding: 10
    },
    titleWrapper: {
        padding: 30,
        alignItems: 'flex-start',
        justifyContent: 'center',
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
        width: '100%',
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
    attributesItem__innerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
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

export default connect(mapStateToProps, null)(ArticleScreen)