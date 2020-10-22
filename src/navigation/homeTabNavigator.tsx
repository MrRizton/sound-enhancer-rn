import React, {useCallback} from 'react';
import {
  BottomTabBarOptions,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {HistoryScreen, HomeScreen, SettingsScreen} from '../screens';
import colors from '../utils/colors';
import {ParamListBase, RouteProp} from '@react-navigation/native';
import {IconButton, Text} from 'react-native-paper';
import {FONT_SIZE, FONT_WEIGHT} from '../utils/constants';
import styles from '../utils/styles';

export type RouteNames = 'Home' | 'History' | 'Settings';

const TAB_ICONS: {
  [key in RouteNames]: string;
} = {
  Home: 'home',
  History: 'history',
  Settings: 'cog',
};

const Tab = createBottomTabNavigator();

const HomeTabNavigator = () => {
  const bottomTabBarOptions: BottomTabBarOptions = {
    activeTintColor: colors.main.onSecondary,
    activeBackgroundColor: colors.main.secondary,
    inactiveBackgroundColor: colors.main.surface,
    style: styles.tabBar,
  };

  const screenOptions: (props: {
    route: RouteProp<ParamListBase, string>;
    navigation: any;
  }) => BottomTabNavigationOptions = ({route}) => ({
    tabBarIcon: ({focused, size}) => {
      const iconName = TAB_ICONS[route.name as RouteNames];
      return (
        <IconButton
          icon={iconName}
          color={focused ? colors.main.onSecondary : colors.main.onBackground}
        />
      );
    },
    tabBarLabel: ({focused}) => {
      return (
        <Text
          style={{
            color: focused ? colors.main.onSecondary : colors.main.onBackground,
            fontFamily: FONT_WEIGHT.regular,
            fontSize: FONT_SIZE.regular,
          }}>
          {route.name}
        </Text>
      );
    },
  });

  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      tabBarOptions={bottomTabBarOptions}
      initialRouteName="Home">
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
