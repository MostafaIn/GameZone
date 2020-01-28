import React,{useState} from 'react'
import {View, Text, FlatList,TouchableOpacity } from 'react-native'
import {globalStyles} from '../styles/global'
import Card from '../shared/Card';

const Home = ({navigation}) =>{
    const [reviews,setReview]=useState([
        {name:'Mostafa',age:35,email:'mosi@gmail.com',rating:'5',id:'1'},
        {name:'Rohafza',age:33,email:'rohy@hotmail.com',rating:'4',id:'2'},
        {name:'Morteza',age:32,email:'mori@yahoo.com',rating:'3',id:'3'},
        {name:'Edriis',age:32,email:'edi@live.com',rating:'2',id:'4'},
        {name:'Farzana',age:30,email:'feri@gmail.com',rating:'1',id:'5'},
    ]);
    
    return(
        <View style={globalStyles.container}>
            {/* {reviews.map( review => <Text style={globalStyles.titleText}>{review.title}</Text>)} */}
            
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('ReviewDetails', item)} style={{marginVertical:10}}>
                        <Card>
                            <Text style={globalStyles.titleText}>{ item.name }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    )
};
export default Home;