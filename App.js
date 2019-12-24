import React,{useState} from 'react';
import * as Font from 'expo-font'

import Home from './screens/Home';
import { AppLoading } from 'expo';


const getFont = () => Font.loadAsync({
  'lobster-regular' : require('./assets/fonts/Lobster-Regular.ttf')
})

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
   
  if(fontLoaded){
    return(
      <Home />
    )
  }else{
  return(
  <AppLoading startAsync={getFont} onFinish={()=> setFontLoaded(true)} />
  )
  }
};
