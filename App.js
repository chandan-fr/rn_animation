import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ScreenOne from './src/screens/stacknav/ScreenOne';
import ScreenTwo from './src/screens/stacknav/ScreenTwo';
import Splash from './src/screens/Splash';
import GeneratePassword from './src/screens/stacknav/GeneratePassword';
import Tut1 from './src/screens/stacknav/Tut1';
import GenMenu from './src/screens/stacknav/GenMenu';
import Tute2 from './src/screens/stacknav/Tute2';

const App = () => {

  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName='splash' >
        <RootStack.Screen name='splash' options={{ headerShown: false }} component={Splash} />
        <RootStack.Screen name='genmenu' options={{ headerShown: false }} component={GenMenu} />
        <RootStack.Screen name='scrone' options={{ headerShown: false }} component={ScreenOne} />
        <RootStack.Screen name='scrtwo' options={{ headerShown: false }} component={ScreenTwo} />
        <RootStack.Screen name='genpass' options={{ headerShown: false }} component={GeneratePassword} />
        <RootStack.Screen name='tut1' options={{ headerShown: false }} component={Tut1} />
        <RootStack.Screen name='tut2' options={{ headerShown: false }} component={Tute2} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


export default App;
