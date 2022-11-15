import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import useChangeTheme from '../../zstand/useChangeTheme';
import Colors from '../../themes/Colors';

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

const renderItem = ({item}, isDark) => {
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

const HomeScreen = () => {
  const isDark = useChangeTheme(state => state.isDark);

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? Colors.lightBalck : Colors.lightWihite},
      ]}>
      <FlatList
        renderItem={item => renderItem(item, isDark)}
        numColumns={2}
        data={Data}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;
