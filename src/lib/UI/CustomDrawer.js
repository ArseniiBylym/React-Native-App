import React from 'react';
import { StyleSheet, View, DrawerLayoutAndroid, Text} from 'react-native';

function CustomDrawer (props) {
    return(
        <DrawerLayoutAndroid
            drawerWidth={250}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => (
                <View style = {styles.drawerWrapper}>
                    <View style={styles.drawerItem}>
                        <Text style={styles.drawerItemText}>Some text 1</Text>
                    </View>
                    <View style={styles.drawerItem}>
                        <Text style={styles.drawerItemText}>Some text 1</Text>
                    </View>
                    <View style={styles.drawerItem}>
                        <Text style={styles.drawerItemText}>Some text 1</Text>
                    </View>
                </View>
            )}
        >{props.children}</DrawerLayoutAndroid>
    )
}

export default CustomDrawer

//styles
const styles = StyleSheet.create({
	drawerWrapper: {
		flex: 1,
		width: '100%',
		backgroundColor: 'black',
		alignItems: 'center',
		justifyContent: 'flex-start'
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