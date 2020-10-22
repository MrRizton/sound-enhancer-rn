import {Theme as NavigationTheme} from '@react-navigation/native';
import {DefaultTheme} from 'react-native-paper';
import {Theme} from 'react-native-paper/lib/typescript/src/types';
import colors from './colors';
import {FONT_WEIGHT} from './constants';

const theme = (): Theme => {
  return {
    ...DefaultTheme,
    roundness: 10,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.main.primary,
      accent: colors.main.secondary,
      text: colors.main.onPrimary,
      placeholder: colors.main.disabled,
      disabled: colors.main.disabled,
      onBackground: colors.main.onBackground,
      onSurface: colors.main.onSurface,
      background: colors.main.background,
      surface: colors.main.surface,
      error: colors.main.error,
      backdrop: colors.main.secondary,
    },
    fonts: {
      regular: {
        fontFamily: FONT_WEIGHT.regular,
      },
      medium: {
        fontFamily: FONT_WEIGHT.semibold,
      },
      light: {
        fontFamily: FONT_WEIGHT.bold,
      },
      thin: {
        fontFamily: FONT_WEIGHT.extrabold,
      },
    },
  };
};

export const navigationTheme = (): NavigationTheme => {
  return {
    dark: true,
    colors: {
      background: colors.main.background,
      primary: colors.main.primary,
      card: colors.main.surface,
      text: colors.main.onSurface,
      border: colors.main.primaryVariation,
      notification: colors.main.surface,
    },
  };
};

export default theme;
