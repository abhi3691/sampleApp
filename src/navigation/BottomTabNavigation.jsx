import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../screens/home_screen/HomeScreen';
import SettingScreen from '../screens/setting_screen/SettingScreen';
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontRatio from '../global_functions/font_ratio/FontRatio';
import Colors from '../themes/Colors';
const Tab = createMaterialBottomTabNavigator();
const BottomTabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor={Colors.white}
        barStyle={{
          backgroundColor: Colors.black,
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => {
              return (
                <Ionicons name="home" size={FontRatio(20)} color={color} />
              );
            },
          }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({color}) => {
              return (
                <Ionicons name="settings" size={FontRatio(20)} color={color} />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigation;
