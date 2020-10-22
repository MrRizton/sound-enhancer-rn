import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import colors from '../utils/colors';

const Play = () => {
  return (
    <Svg height={24} viewBox="0 0 24 24" width={24}>
      <Path fill={colors.main.onSurface} d="M8 5v14l11-7z" />
    </Svg>
  );
};

export default Play;
