import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'default'} />
      <BottomTabNavigation />
    </View>
  );
};

export default App;
