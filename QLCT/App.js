import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screen/homeScreen'
import ThongKeScreen from './screen/thongKeScreen'
import SettingsScreen from './screen/settingsScreen'
import GiaoDichScreen from './screen/giaoDichScreen';

const homeStack = createStackNavigator();
function HomeStackSreen() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen name="Home" component={HomeScreen} options={option}/>
      <homeStack.Screen name="Giao dịch" component={GiaoDichScreen} options={option}/>
    </homeStack.Navigator>
  );
}

const TKStack = createStackNavigator();
function ThongKeStackSreen() {
  return (
    <TKStack.Navigator>
      <TKStack.Screen name="Thống kê" component={ThongKeScreen} options={option}/>
    </TKStack.Navigator>
  );
}

const settingsStack = createStackNavigator();
function SettingsStackSreen() {
  return (
    <settingsStack.Navigator>
      <settingsStack.Screen name="Cài đặt" component={SettingsScreen} options={option}/>
    </settingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const option = {
  headerStyle: {backgroundColor: '#6DB5CB'},
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontSize: 23}
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'ThongKe') {
              iconName = 'ios-pie';
            } else if (route.name === 'Settings') {
              iconName = 'ios-settings';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#FE7235',
          inactiveTintColor: '#FFF',
          activeBackgroundColor: '#6DB5CB',
          inactiveBackgroundColor:  '#6DB5CB'
        }}>
        <Tab.Screen name="Home" component={HomeStackSreen}/>
        <Tab.Screen name="ThongKe" component={ThongKeStackSreen} options={{title: "Thống kê"}}/>
        <Tab.Screen name="Settings" component={SettingsStackSreen} options={{title: "Cài đặt"}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });