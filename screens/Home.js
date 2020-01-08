import React,{useState} from 'react'
import {View, Text, FlatList,TouchableOpacity } from 'react-native'
import {globalStyles} from '../styles/global'

const Home = ({navigation}) =>{
    const [reviews,setReview]=useState([
        {name:'Mostafa',age:35,email:'mosi@gmail.com',id:'1'},
        {name:'Rohafza',age:33,email:'rohy@hotmail.com',id:'2'},
        {name:'Morteza',age:32,email:'mori@yahoo.com',id:'3'},
        {name:'Edriis',age:32,email:'edi@live.com',id:'4'},
        {name:'Farzana',age:30,email:'feri@gmail.com',id:'5'},
    ]);
    
    return(
        <View style={globalStyles.container}>
            {/* {reviews.map( review => <Text style={globalStyles.titleText}>{review.title}</Text>)} */}
            
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)} style={{marginVertical:20}}>
                        <Text style={globalStyles.titleText}>{ item.name }</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
};
export default Home;