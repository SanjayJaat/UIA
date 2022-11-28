import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/Screens/Home';
import About from './src/Screens/About';
import Book from './src/Screens/Book';
import Shples from './src/Screens/Shples';
import Login from './src/Screens/Auth/Login';
import Create from './src/Screens/Auth/Create';
import Forget from './src/Screens/Auth/Forget';
import First from './src/Screens/First';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Shples" component={Shples} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Create" component={Create} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Book" component={Book} />
        <Stack.Screen name="Forget" component={Forget} />
        <Stack.Screen name="First" component={First} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
