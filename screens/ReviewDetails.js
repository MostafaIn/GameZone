import React from 'react'
import { View, Text } from 'react-native'
import {globalStyles} from '../styles/global'


const ReviewDetails = ({navigation}) => {

    const hadleBack =()=>{
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
           <Text>NAME: </Text><Text style={globalStyles.titleText}>{navigation.getParam('name')}</Text>
           <Text>AGE: </Text><Text style={globalStyles.titleText}>{navigation.getParam('age')}</Text>
           <Text>EMAIL: </Text><Text style={globalStyles.titleText}>{navigation.getParam('email')}</Text>
        </View>
    )
}

export default ReviewDetails;
