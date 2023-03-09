import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddToCart from './screens/AddToCart';
import OnlineShopping  from './screens/OnlineShopping'
import PaymentSuccessful from './screens/PaymentSuccessful';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='OnlineShopping' component={OnlineShopping}/>
        <Stack.Screen name='AddToCart' component={AddToCart}/>
        <Stack.Screen name='PaymentSuccessful' component={PaymentSuccessful}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}


