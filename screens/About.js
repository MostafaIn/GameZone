import React from 'react'
import { StyleSheet,View, Text } from 'react-native'

const About = () => {
    return (
        <View style={styles.container}>
            <Text>this is ABOUT screen.</Text>
        </View>
    )
}

export default About;

const styles = StyleSheet.create({
    container:{
        padding: 140,
    }
})
