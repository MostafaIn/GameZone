import React from 'react'
import { View, Text, Button } from 'react-native'
import {globalStyles} from '../styles/global'


const ReviewDetails = ({navigation}) => {

    const hadleBack =()=>{
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
           <Text>TITLE: </Text><Text style={globalStyles.titleText}>{navigation.getParam('title')}</Text>
           <Text>BODY: </Text><Text style={globalStyles.titleText}>{navigation.getParam('body')}</Text>
           <Text>RATING: </Text><Text style={globalStyles.titleText}>{navigation.getParam('rating')}</Text>
        </View>
    )
}

export default ReviewDetails;
