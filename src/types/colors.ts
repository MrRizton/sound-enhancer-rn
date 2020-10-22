export interface IMainScheme {
  primary: string;
  primaryVariation: string;
  secondary: string;
  secondaryVariation: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onPrimaryVariation: string;
  onSecondary: string;
  onSecondaryVariation: string;
  onBackground: string;
  onSurface: string;
  onError: string;
  disabled: string;
  onDisabled: string;
}

export interface IMiscScheme {
  orange: string;
  orangeVariation: string;
  blue: string;
  blueVariation: string;
  violete: string;
  violeteVariation: string;
  gray: string;
  grayVariation: string;
  green: string;
  greenVariation: string;
  red: string;
  redVariation: string;
}

export default interface IColors {
  main: IMainScheme;
  misc: IMiscScheme;
}
