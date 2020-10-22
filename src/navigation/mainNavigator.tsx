import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeTabNavigator from './homeTabNavigator';

export type MainStackParams = {
  HomeTabNavigator: {};
};

const Stack = createStackNavigator<MainStackParams>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator headerMode="none" initialRouteName="HomeTabNavigator">
      <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
