 import {createStackNavigator} from 'react-navigation-stack'

import Home from '../screens/Home';
import ReviewDetails from '../screens/ReviewDetails';

import React from 'react'
import Header from '../shared/Header'

const screens = {
    Home:{
        screen: Home,
        navigationOptions: ({navigation}) => {
           return{
            headerTitle: () => <Header navigation={navigation} title='GAME ZONE' />,
           } 
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title:'REVIEW DETAILS'
        }
    }
};


const homeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
       headerStyle:{
        position:'fixed',
        bottom:0,
        backgroundColor:'#cdc',
        height: 60
       } 

    }
});

export default homeStack;