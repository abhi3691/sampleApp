import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import useChangeTheme from '../../zstand/useChangeTheme';
import Colors from '../../themes/Colors';
import SingleUserCard from '../../components/organization/single_user_card/SingleUserCard';

const Data = [
  {
    id: '1',
    name: 'abhi',
    uri: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  },
  {
    id: '2',
    name: 'abhi',
    uri: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  },
  {
    id: '3',
    name: 'abhi',
    uri: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  },
  {
    id: '4',
    name: 'abhi',
    uri: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  },
  {
    id: '5',
    name: 'abhi',
    uri: 'https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg',
  },
];

const HomeScreen = () => {
  const isDark = useChangeTheme(state => state.isDark);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? Colors.lightBalck : Colors.lightWihite},
      ]}>
      <FlatList
        renderItem={item => SingleUserCard(item, isDark)}
        numColumns={2}
        data={Data}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
