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
    },
    modalContent:{
        flex:1
    },
    modalToggle:{
       marginBottom: 10,
       borderWidth:1,
       borderColor:'#f2f2f2',
       padding:10,
       borderRadius:10,
       alignSelf:'center' 
    },
    modalClose:{
        marginTop:175,
        marginBottom:0,
        color:'red'
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6
    },
    errorTxt:{
       textAlign:'center',
       fontWeight:'bold',
       color:'crimson', 
       marginBottom:10,
       marginTop:6
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