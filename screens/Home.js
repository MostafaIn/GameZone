import React,{useState} from 'react'
import {View, Text, FlatList,TouchableOpacity } from 'react-native'
import {globalStyles} from '../styles/global'

const Home = ({navigation}) =>{
    const [reviews,setReview]=useState([
        {title:'HONDA',rating:3,body:'car',id:'1'},
        {title:'MAZDA',rating:3,body:'car',id:'2'},
        {title:'NIISAN',rating:4,body:'car',id:'3'},
        {title:'TOYOTA',rating:5,body:'car',id:'4'},
        {title:'MITSUBISHI',rating:5,body:'car',id:'5'},
    ]);
    
    return(
        <View style={globalStyles.container}>
            {/* {reviews.map( review => <Text style={globalStyles.titleText}>{review.title}</Text>)} */}
            
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)} style={{marginVertical:20}}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
};
export default Home;