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
  },
  addContent: {
    borderColor: colors.main.onSurface,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderRadius: 16,
  },
  fileName: {
    textAlign: 'center',
    fontFamily: FONT_WEIGHT.bold,
    fontSize: FONT_SIZE.large,
    marginBottom: 16,
  },
  fileStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fileStats: {
    fontFamily: FONT_WEIGHT.regular,
    fontSize: FONT_SIZE.small,
  },
  title: {
    marginVertical: 24,
    fontFamily: FONT_WEIGHT.bold,
    fontSize: FONT_SIZE.grand,
    alignSelf: 'center',
  },
  button: {
    backgroundColor: colors.main.primary,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
});

export default styles;
