import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CartThongKe from '../components/cardThongKe'

export default class ThongKeCreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerOption}>
          <View style={styles.option}>
            <Text style={{color: '#FFF', fontSize: 25, fontWeight: 'bold'}}>Ngày</Text>
          </View>
          <View style={styles.option}>
            <Text style={{color: '#FFF', fontSize: 25, fontWeight: 'bold'}}>Tháng</Text>
          </View>
        </View>
        <CartThongKe />
        <CartThongKe />
        <CartThongKe />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
  },
  containerOption: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10
  },
  option: {
    backgroundColor: '#FB7034',
    height: 50,
    width: 100,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
