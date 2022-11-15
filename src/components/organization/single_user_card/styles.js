import {StyleSheet} from 'react-native';
import FontRatio from '../../../global_functions/font_ratio/FontRatio';
import ScreenRatio from '../../../global_functions/screen_ratio/ScreenRatio';

const styles = StyleSheet.create({
  itemCOntainer: {
    height: ScreenRatio.height / 4,
    width: ScreenRatio.width / 2.5,
    elevation: 4,
    margin: 10,
    alignItems: 'center',
  },
  image: {
    margin: 10,
    height: ScreenRatio.width / 4,
    width: ScreenRatio.width / 4,
    borderRadius: ScreenRatio.width / 4,
  },
  name: {
    fontSize: FontRatio(20),
    fontWeight: 'bold',
  },
});
export default styles;
