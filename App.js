import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, TransitionSpecs, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ScreenOne from './src/screens/stacknav/ScreenOne';
import ScreenTwo from './src/screens/stacknav/ScreenTwo';
import Splash from './src/screens/Splash';
import GeneratePassword from './src/screens/stacknav/GeneratePassword';
import Tut1 from './src/screens/stacknav/Tut1';
import GenMenu from './src/screens/stacknav/GenMenu';
import Tute2 from './src/screens/stacknav/BounceAnime';
import { Easing } from 'react-native';
import TestCSSProperty from './src/screens/stacknav/TestCSSProperty';

const App = () => {

  const RootStack = createStackNavigator();

  const openConfig = {
    animation: "spring",
    config: {
      stiffness: 1000,
      damping: 50,
      mass: 3,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01
    }
  };

  const closeConfig = {
    animation: "timimg",
    config: {
      duration: 200,
      easing: Easing.linear,
    }
  };

  const customTransition = {
    gestureEnabled: true,
    gestureDirection: "horizontal",
    headerShown: false,
    transitionSpec: {
      open: TransitionSpecs.BottomSheetSlideInSpec,
      close: TransitionSpecs.BottomSheetSlideOutSpec
    },
    cardStyleInterpolator: ({ current, next, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0]
              })
            },
            {
              rotate: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: ["180deg", "0deg"]
              })
            },
            {
              scale: next ?
                next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.7]
                })
                : 1
            }
          ]
        }
      }
    }
  };

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName='splash'
        screenOptions={{
          ...customTransition,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          headerShown: false,
          // transitionSpec: {
          //   open: openConfig,
          //   close: closeConfig
          // },
          // cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        <RootStack.Screen name='splash' options={{ headerShown: false }} component={Splash} />
        <RootStack.Screen name='genmenu' component={GenMenu} />
        <RootStack.Screen name='scrone' component={ScreenOne} />
        <RootStack.Screen name='scrtwo' component={ScreenTwo} />
        <RootStack.Screen name='genpass' component={GeneratePassword}
          options={{
            transitionSpec: {
              open: TransitionSpecs.BottomSheetSlideInSpec,
              close: TransitionSpecs.BottomSheetSlideOutSpec
            },
            cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <RootStack.Screen name='tut1' component={Tut1} />
        <RootStack.Screen name='tut2' component={Tute2} />
        <RootStack.Screen name='tcp' component={TestCSSProperty} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}


export default App;
