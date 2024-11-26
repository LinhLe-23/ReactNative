import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Signin from './screens/Sigin';
import Welcome from './screens/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signin' component={Signin} />

      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;