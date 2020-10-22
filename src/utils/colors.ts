import IColors from '../types/colors';

const colors: IColors = {
  main: {
    primary: '#1D2637',
    primaryVariation: '#454E62',
    secondary: '#DEA500',
    secondaryVariation: '#FFD648',
    background: '#1D2637',
    surface: '#283141',
    error: '#EF5350',
    onPrimary: '#FFFFFF',
    onPrimaryVariation: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onSecondaryVariation: '#1D2637',
    onBackground: '#FFFFFF',
    onSurface: '#FFFFFF',
    onError: '#FFFFFF',
    disabled: '#454E62',
    onDisabled: '#717A8F',
  },
  misc: {
    orange: '#FFA44C',
    orangeVariation: '#FBEDD5',
    blue: '#47C1D7',
    blueVariation: '#E0F6FA',
    violete: '#AC9FE6',
    violeteVariation: '#EDEAFF',
    gray: '#A7B8C3',
    grayVariation: '#F0F4F7',
    green: '#46B153',
    greenVariation: '#E7F1E9',
    red: '#F47C87',
    redVariation: '#FFE5E7',
  },
};

export function hexToRgb(hex: string) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    // @ts-ignore
    return `rgb(${(c >> 16) & 255}, ${(c >> 8) & 255}, ${c & 255})`;
  }
  throw new Error('Bad Hex');
}

export default colors;
