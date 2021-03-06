import React from 'react';
import { AsyncStorage } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeStackSreen from './stackScreen/homeStackScreen';
import ThongKeStackSreen from './stackScreen/thongKeStackScreen';
import SettingsStackSreen from './stackScreen/settingsStackScreen';

import AsyncStorageExample  from './AsyncStorage';
import { stopAsync } from 'expo/build/AR';
import { loadData } from './components/Actions'
import { saveData } from './components/Actions'
import delItem from './components/Actions'

const Tab = createBottomTabNavigator();

console.log("\n____________Store____________\n");
let appState = {
  giao_dich: [
  ],
  id: 1
}

const ListReducer = (state = appState, action) => {
  let newGiaoDich = state.giao_dich;
  let newId = state.id;

  switch(action.type)
  {
    case "ADD":
    {
      console.log(action);
      let newItem = action.item;
      const index = newGiaoDich.length;
      newItem.id = newId + 1;
      console.log("Adding", newItem);
      return { ...state, giao_dich: [...newGiaoDich, newItem], id: newId+1 }
    }
    case "DEL":
      newGiaoDich = newGiaoDich.filter( (item, i) => i !== action.atIndex);
      console.log('Deleting', action.atIndex);
      return { ...state, giao_dich: newGiaoDich };
    case "LOAD":
      newGiaoDich = action.giao_dich;
      newId = action.id;
      console.log("\nNew giao dich:", newGiaoDich);
      console.log("\nNew id:", newId)
      return { ...state, giao_dich: newGiaoDich, id: newId };
    case "SAVE":
  }
  return state;
}

const store = createStore(ListReducer);
console.log("\n____________END Store____________\n");

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
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
            <Tab.Screen name="Home" component={HomeStackSreen} options={{title: "Trang chủ"}}/>
            <Tab.Screen name="ThongKe" component={ThongKeStackSreen} options={{title: "Thống kê"}}/>
            <Tab.Screen name="Settings" component={SettingsStackSreen} options={{title: "Cài đặt"}}/>
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}