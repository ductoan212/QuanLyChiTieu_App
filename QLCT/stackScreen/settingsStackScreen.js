import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from '../screen/settingsScreen';

const settingsStack = createStackNavigator();
export default function SettingsStackSreen() {
  return (
    <settingsStack.Navigator>
      <settingsStack.Screen name="Cài đặt" component={SettingsScreen} options={option}/>
    </settingsStack.Navigator>
  );
}

const option = {
    headerStyle: {backgroundColor: '#6DB5CB'},
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 23}
  };
