
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {AuthStackParamList} from "./Routes";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { LoginPage } from './Screens';
import { RegisterPage } from "./Screens";


  const Stack = createNativeStackNavigator<AuthStackParamList>();


 const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false, contentStyle: { backgroundColor:"#fff" } }}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  ) 
 }


export default App;
