import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ThongKeScreen from '../screen/thongKeScreen';

const TKStack = createStackNavigator();
export default function ThongKeStackSreen() {
  return (
    <TKStack.Navigator>
      <TKStack.Screen name="Thống kê" component={ThongKeScreen} options={option}/>
    </TKStack.Navigator>
  );
}

const option = {
    headerStyle: {backgroundColor: '#6DB5CB'},
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 23}
  };