import React from 'react'
import {View, Text, Button } from 'react-native'
import {globalStyles} from '../styles/global'

const Home = ({navigation}) =>{

    const handleClick = () =>{
        navigation.navigate('ReviewDetails')
    }
    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>This is Home.</Text>
            <Button title='go to REVIEW' color='coral' onPress={handleClick} />
        </View>
    )
};
export default Home;