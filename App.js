import {View, Text, StatusBar, useColorScheme} from 'react-native';
import React from 'react';
import BottomTabNavigation from './src/navigation/BottomTabNavigation';
import useChangeTheme from './src/zstand/useChangeTheme';
import Colors from './src/themes/Colors';
const App = () => {
  const isDark = useChangeTheme(state => state.isDark);
  const setIsDark = useChangeTheme(state => state.setIsDark);
  const colorScheme = useColorScheme();

  React.useEffect(() => {
    if (colorScheme === 'dark' && isDark !== true) {
      setIsDark(true);
    }
  }, [colorScheme]);
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? Colors.lightBalck : Colors.lightWihite}
      />
      <BottomTabNavigation />
    </View>
  );
};

export default App;
