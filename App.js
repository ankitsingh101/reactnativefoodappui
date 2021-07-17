import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import colors from './assets/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons'
import fonts from './assets/fonts/fonts';
import AppLoading from 'expo-app-loading';
import Home from './components/Home';
import Details from './components/Details';
const Stack = createStackNavigator();


export default function App() {

  const [isLoaded] = useFonts({
    Montserrat: fonts.Montserrat,
  });

  if(!isLoaded) {
    return <AppLoading />
  } 

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Home}  options={{
          headerShown: false
        }}/>
        <Stack.Screen  name="Details" component={Details}  options={{
            headerShown: false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontFamily:'Montserrat-Regular'
  }
});
