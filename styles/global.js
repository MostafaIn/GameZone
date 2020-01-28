import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
    container:{
        flex:1,
        padding:70
    },
    titleText:{
        fontFamily:'lobster-regular',
        fontSize:18,
        color: '#333',
        textAlign:'center'
    },
    para:{
        marginVertical:8,
        lineHeight:20
    }
});

export const Images = {
    ratings:{
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),

    }
};