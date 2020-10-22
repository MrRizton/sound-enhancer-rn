import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {navigationTheme} from '../utils/theme';
import MainNavigator from './mainNavigator';

const RootNavigator: React.FC = () => {
  return (
    <NavigationContainer theme={navigationTheme()}>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
