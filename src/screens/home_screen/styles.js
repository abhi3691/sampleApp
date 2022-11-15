import {StyleSheet} from 'react-native';
import FontRatio from '../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../global_functions/screen_ratio/ScreenRatio';
import Colors from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    padding: 10,
    alignItems: 'center',
  },
});

export default styles;
