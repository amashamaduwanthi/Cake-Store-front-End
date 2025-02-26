// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (<View></View>
//
//
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CakeDetails from "./app/dashboard/CakeDetails";
import placeOrder from "./app/dashboard/placeOrder";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="CakePage">
          <Stack.Screen name="CakePage" component={CakeDetails} options={{ title: 'Cakes' }} />
          <Stack.Screen name="PlaceOrder" component={placeOrder} options={{ title: 'Place Order' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
