import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import {FONT_SIZE, FONT_WEIGHT} from '../../utils/constants';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  scrollViewContentContainer: {
    paddingHorizontal: 16,
  },
  tileContent: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderColor: colors.main.onSurface,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 16,
  },
  title: {
    marginVertical: 24,
    fontFamily: FONT_WEIGHT.bold,
    fontSize: FONT_SIZE.grand,
    alignSelf: 'center',
  },
});

export default styles;
