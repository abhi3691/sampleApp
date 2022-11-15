import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../components/atom/button/Button';
import {RadioButton, Switch} from 'react-native-paper';
import useChangeTheme from '../../zstand/useChangeTheme';

const SettingScreen = () => {
  const setIsDark = useChangeTheme(state => state.setIsDark);
  const isDark = useChangeTheme(state => state.isDark);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Change Theme</Text>
        <Switch value={isDark} onValueChange={() => setIsDark(!isDark)} />
      </View>
    </View>
  );
};

export default SettingScreen;
