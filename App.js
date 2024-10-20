import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/views/home';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        
        options={{
          title: '',
          headerTransparent: true,
          headerTintColor: '#fff',
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;