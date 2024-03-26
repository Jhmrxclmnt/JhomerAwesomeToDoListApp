/**
 * My To Do List App
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      {/* Add the following: */}
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
      {/**********************/}
    </NavigationContainer>
  );
}

export default App;