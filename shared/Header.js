import React from 'react'
import { StyleSheet, View, Text ,Image, ImageBackground } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const Header = ({navigation,title}) => {

    const toggleMenu = () =>{
        navigation.toggleDrawer();
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            {/* hamberger button for the menu */}
            <MaterialIcons name='menu' size={28} onPress={toggleMenu} style={styles.icon} />
            <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/heart_logo.png')} style={styles.logo} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
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
    },
    logo:{
        width:25,
        height:25,
        marginHorizontal:10
    }
})