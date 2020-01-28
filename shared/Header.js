import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const Header = ({navigation,title}) => {

    const toggleMenu = () =>{
        navigation.toggleDrawer();
    }

    return (
        <View style={styles.header}>
            {/* hamberger button for the menu */}
            <MaterialIcons name='menu' size={28} onPress={toggleMenu} style={styles.icon} />
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText:{
        fontWeight:'bold',
        fontSize:20,
        color:'#333',
        letterSpacing:1
    },
    icon:{
        position:'absolute',
        left: 16,
        bottom:0
    }
})