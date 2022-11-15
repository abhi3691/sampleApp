import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../components/atom/button/Button';
import {RadioButton, Switch} from 'react-native-paper';
import useChangeTheme from '../../zstand/useChangeTheme';
import Colors from '../../themes/Colors';

const SettingScreen = () => {
  const setIsDark = useChangeTheme(state => state.setIsDark);
  const isDark = useChangeTheme(state => state.isDark);
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDark ? Colors.lightBalck : Colors.lightWihite},
      ]}>
      <View style={styles.row}>
        <Text
          style={[styles.text, {color: isDark ? Colors.white : Colors.black}]}>
          Change Theme
        </Text>
        <Switch
          value={isDark}
          onValueChange={() => setIsDark(!isDark)}
          trackColor={{true: Colors.black, false: Colors.lightBalck}}
          thumbColor={isDark ? Colors.white : Colors.white}
        />
      </View>
    </View>
  );
};

export default SettingScreen;
