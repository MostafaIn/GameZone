import React from 'react'
import { View, Text, Image } from 'react-native'
import {globalStyles, Images} from '../styles/global'
import Card from '../shared/Card'

const ReviewDetails = ({navigation}) => {
    const rating = navigation.getParam('rating');

    const hadleBack =()=>{
        navigation.goBack();
    }
    return (
        <View style={globalStyles.container}>
            <Card>
           <Text>NAME: </Text><Text style={globalStyles.titleText}>{navigation.getParam('name')}</Text>
           <Text>AGE: </Text><Text style={globalStyles.titleText}>{navigation.getParam('age')}</Text>
           <Text>EMAIL: </Text><Text style={globalStyles.titleText}>{navigation.getParam('email')}</Text>
           <Image source={Images.ratings[rating]} />
           </Card>
        </View>
    )
}

export default ReviewDetails;
