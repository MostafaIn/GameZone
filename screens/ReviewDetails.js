import React from 'react'
import { View, Text, Button } from 'react-native'
import {globalStyles} from '../styles/global'


const ReviewDetails = ({navigation}) => {

    const hadleBack =()=>{
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>this is Review Details screen.</Text>
            <Button title=' <- go back' onPress={hadleBack} />
        </View>
    )
}

export default ReviewDetails;
