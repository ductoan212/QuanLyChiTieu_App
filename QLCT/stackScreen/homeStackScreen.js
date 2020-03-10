import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { connect } from 'react-redux';

import HomeScreen from '../screen/homeScreen'
import GiaoDichScreen from '../screen/giaoDichScreen';

const homeStack = createStackNavigator();
export default function HomeStackSreen() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen name="Home" component={HomeScreen} options={option}/>
      <homeStack.Screen name="GiaoDich" component={GiaoDichScreen} options={{
        ...option,
        title: "Giao dịch"}}/>
    </homeStack.Navigator>
  );
}

const option = {
    headerStyle: {backgroundColor: '#6DB5CB'},
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontSize: 23}
  };