import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/Home';
// import About from '../screens/About';
import ReviewDetails from '../screens/ReviewDetails';

const screens = {
    Home:{
        screen: Home,
        navigationOptions:{
            title:'HOME SCREEN',
            // headerStyle:{
            //     backgroundColor:'azure'
            // }
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title:'REVIEW DETAILS'
        }
    }
};


const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
       headerStyle:{
        backgroundColor:'#cdc',
        height: 60
       } 

    }
});

export default createAppContainer(HomeStack);