import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import HomeStackSreen from './stackScreen/homeStackScreen';
import ThongKeStackSreen from './stackScreen/thongKeStackScreen';
import SettingsStackSreen from './stackScreen/settingsStackScreen';

const Tab = createBottomTabNavigator();

let appState = {
  giao_dich: [
    {
      id: 1,
      date: '01-01-2020',
      name: 'Gửi xe',
      note: ' Gửi xe hàng tháng',
      chi: 1,
      money: 200
    },
    {
      id: 2,
      date: '02-01-2020',
      name: 'Thuê trọ',
      note: 'Trọ tháng 1',
      chi: 1,
      money: 2000
    },
    {
      id: 3,
      date: '02-01-2020',
      name: 'Rút tiền',
      note: 'Mẹ gửi',
      chi: 0,
      money: 5000
    },
    {
      id: 4,
      date: '01-01-2020',
      name: 'Gửi xe',
      note: ' xe hàng tháng',
      chi: 1,
      money: 200
    }
  ]
}



const taskListReducer = (state = appState, action) => {
  let newGiaoDich = state.giao_dich;

  switch(action.type)
  {
    case "ADD":
    {
      console.log(action);
      let newItem = action.item;
      const index = newGiaoDich.length;
      newItem.id = index + 1;
      console.log("Adding", newItem);
      return { ...state, giao_dich: [...newGiaoDich, newItem] }
    }
    case "DEL":
      newGiaoDich = newGiaoDich.filter( (item, i) => i !== action.atIndex);
      console.log('Deleting', action.atIndex);
      return { ...state, giao_dich: newGiaoDich };
  }
  return state;
}

const store = createStore(taskListReducer);

export default function App() {
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