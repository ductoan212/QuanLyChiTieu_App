import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function CardHome(props) {
    const {info} = props;
    var chiTieu = 'Chi'
    if(info.chi == 0)
      chiTieu = 'Tiêu';
    return (
      <View style={styles.container}>
        <View style={styles.info}>
            <Text style={styles.date}>{info.date}</Text>
            <Text style={styles.name} numberOfLines={1}>{info.name}</Text>
            <Text style={styles.note} numberOfLines={3}>{info.note}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.8}>
        <View style={styles.price}>
            <Text style={styles.chiTieu}>{chiTieu}</Text>
            <Text style={styles.money}>{`${info.money}k`}</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
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
    marginVertical: 10,
    // width: '100%'
    // height: 200
  },
  info: {
      marginRight: 10,
      // backgroundColor: '#99E5FD',
      display: 'flex',
    //   alignItems: 'stretch',
    //   justifyContent: 'flex-start',
      width: 70,
      // height: 100,
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
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  name: {
      marginBottom: 10,
      fontSize: 28,
      color: '#6DB5CB',
      fontWeight: 'bold',
      // backgroundColor: 'red'
  },
  note: {
    // padding: 5,
    color: '#FE7235',
    fontSize: 15,
    // backgroundColor: 'grey',
    // flexGrow: 1,
    // flexShrink: 2
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
    // backgroundColor: 'grey',
    textAlign: 'center'
  }
});
