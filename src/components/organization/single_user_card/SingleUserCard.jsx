import {Image, Text, View} from 'react-native';
import Colors from '../../../themes/Colors';
import styles from './styles';

const SingleUserCard = ({item}, isDark) => {
  return (
    <View
      style={[
        styles.itemCOntainer,
        {backgroundColor: isDark ? Colors.black : Colors.white},
      ]}>
      <Image source={{uri: item.uri}} style={styles.image} />
      <Text
        style={[styles.name, {color: isDark ? Colors.white : Colors.black}]}>
        {item.name}
      </Text>
    </View>
  );
};

export default SingleUserCard;
