import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import colors from '../utils/colors';

const Pause = () => {
  return (
    <Svg height={24} viewBox="0 0 24 24" width={24}>
      <Path fill={colors.main.onSurface} d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
    </Svg>
  );
};

export default Pause;
