import React from 'react'
import {StyleSheet, View, Text } from 'react-native'

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.homeTitle}>This is Home.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:140,
    },
    homeTitle:{
        fontFamily:'lobster-regular',
        fontSize:22
    }
})