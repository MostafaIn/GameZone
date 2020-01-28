import React from 'react'
import { View, Text } from 'react-native'
import {globalStyles} from '../styles/global'
import Card from '../shared/Card'

const ReviewDetails = ({navigation}) => {

    const hadleBack =()=>{
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Card>
           <Text>NAME: </Text><Text style={globalStyles.titleText}>{navigation.getParam('name')}</Text>
           <Text>AGE: </Text><Text style={globalStyles.titleText}>{navigation.getParam('age')}</Text>
           <Text>EMAIL: </Text><Text style={globalStyles.titleText}>{navigation.getParam('email')}</Text>
           </Card>
        </View>
    )
}

export default ReviewDetails;
