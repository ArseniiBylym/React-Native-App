import React, { Component } from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';
import Header from '../../components/Header/Header'
import ComentItem from '../../components/ComentItem/ComentItem';
import CustomDrawer from '../../lib/UI/CustomDrawer'
import CustomButton from '../../lib/UI/CustomButton'
import IconAdd from '../../images/ic_add.png'

class ComentsScreen extends Component {

    constructor(props) {
        super(props);
        this.refDrawer = React.createRef();
    }

    showDrawer = () => {
        this.refDrawer.current.openDrawer()
    }

    goToSearchHandler = () => {
        const { navigate } = this.props.navigation
        navigate('SearchScreen')
    }

    render() {
        const coments = this.props.navigation.getParam('coments')
        return(
            <CustomDrawer customRef={this.refDrawer}>
                <View style={styles.Coments}>
                    <Header title='Coments' showDrawer={this.showDrawer} goToSearchHandler={this.goToSearchHandler}/>
                    <FlatList 
                        data={coments}
                        keyExtractor={(item, index) => item.author}
                        renderItem={({item}) => <ComentItem config={item} />}
                        ListFooterComponent={<CustomButton icon={IconAdd} style={{width: '70%', marginTop: 20, marginBottom: 20}}>Add new comment</CustomButton>}
                    />
                    
                </View>
            </CustomDrawer>
        )
    }
}

const styles = StyleSheet.create({
    Coments: {
        width: '100%',
        flex: 1,
    },
})

export default ComentsScreen