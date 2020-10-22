import {StyleSheet} from 'react-native';
import {FONT_SIZE, FONT_WEIGHT} from '../../utils/constants';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  title: {
    marginVertical: 24,
    fontFamily: FONT_WEIGHT.bold,
    fontSize: FONT_SIZE.grand,
    alignSelf: 'center',
  },
});

export default styles;
