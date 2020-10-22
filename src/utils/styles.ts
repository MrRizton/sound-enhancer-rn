import {StyleSheet} from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({
  tabBar: {
    borderTopWidth: 0,
  },
  safeAreaProvider: {
    flex: 1,
    backgroundColor: colors.main.background,
  },
  elevationOne: {
    elevation: 1,
  },
});

export default styles;
