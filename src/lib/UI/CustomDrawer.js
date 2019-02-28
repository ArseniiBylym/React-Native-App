import React, { Component } from 'react';
import { StyleSheet, View, DrawerLayoutAndroid, Text} from 'react-native';

class CustomDrawer extends Component {

    render() {

        return(
            <DrawerLayoutAndroid
            
            drawerWidth={250}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => (
                <View style = {styles.drawerWrapper}>
                    <View style={styles.drawerItem}>
                        <Text style={styles.drawerItemText}>Home</Text>
                    </View>
                    <View style={styles.drawerItem}>
                        <Text style={styles.drawerItemText}>Log In</Text>
                    </View>
                    <View style={styles.drawerItem}>
                        <Text style={styles.drawerItemText}>Log Out</Text>
                    </View>
                    <View style={styles.drawerItem}>
                        <Text style={styles.drawerItemText}>Profile</Text>
                    </View>
                </View>
            )}
            ref={this.props.customRef}
            >{this.props.children}</DrawerLayoutAndroid>
        )
    }
}

export default CustomDrawer

//styles
const styles = StyleSheet.create({
	drawerWrapper: {
		flex: 1,
		width: '100%',
		backgroundColor: 'rgba(0,0,0,.8)',
		alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 40
	},
	drawerItem: {
		width: '100%',
		padding: 10,
		marginVertical: 10,
		justifyContent: 'center',
		alignItems: 'center'
	},
	drawerItemText: {
		color: 'white',
		fontSize: 16
	}
});