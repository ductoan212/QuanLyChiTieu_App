import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class CardHome extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.info}>
            <Text style={styles.name} numberOfLines={1}>Mua quan ao</Text>
            <Text style={styles.note} numberOfLines={3}>Ao Quan dai + Quan dai</Text>
        </View>
        <View style={styles.price}>
            <Text style={styles.chiTieu}>Chi</Text>
            <Text style={styles.money}>220k</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    marginVertical: 10
  },
  info: {
      marginRight: 10,
    //   backgroundColor: '#99E5FD',
      display: 'flex',
    //   alignItems: 'stretch',
    //   justifyContent: 'flex-start',
      width: 70,
      height: 100,
      flexGrow: 1
  },
  price: {
      backgroundColor: '#FE7235',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 90,
      height: 90,
      borderRadius: 50,
      borderColor: '#FFB696',
      borderWidth: 3
  },
  name: {
      marginBottom: 10,
      fontSize: 28,
      color: '#6DB5CB',
      fontWeight: 'bold',
    //   backgroundColor: 'red'
  },
  note: {
    // padding: 5,
    color: '#FE7235',
    fontSize: 15,
    // backgroundColor: 'grey',
    // flexGrow: 1
  },
  chiTieu: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 28,
    // backgroundColor: 'yellow'
  },
  money: {
    color: '#FFF',
    fontSize: 20,
    // backgroundColor: 'grey'
  }
});
