import {StyleSheet} from 'react-native';
import FontRatio from '../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../global_functions/screen_ratio/ScreenRatio';
import Colors from '../../themes/Colors';

const styles = StyleSheet.create({
  container: {
    height: ScreenRatio.height,
    width: ScreenRatio.width,
    backgroundColor: Colors.lightWihite,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  text: {
    fontSize: FontRatio(18),
    color: Colors.black,
  },
});

export default styles;
