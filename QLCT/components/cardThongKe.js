import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import Money from '../assets/money.png'
import Pig from '../assets/pig.png'

export default function CardHome (props) {
  const {info} = props;
  return (
    <View style={styles.container}>
      <View style={styles.date}>
          <Text style={{fontSize: 23}}>{info.id}</Text>
      </View>
      <View style={styles.container_chi_thu}>
          <View style={styles.chi_thu}>
              <View style={styles.icon}>
                  <Image source={Pig} style={{height: 60, width: 60, borderRadius: 35}}/>
              </View>
              <View style={styles.info}>
                  <Text style={styles.name}>Thu</Text>
                  <Text style={styles.price}>{`${info.thu}k`}</Text>
              </View>
          </View>
          <View style={styles.chi_thu}>
              <View style={styles.icon}>
                  <Image source={Money} style={{height: 60, width: 60, borderRadius: 35}}/>
              </View>
              <View style={styles.info}>
                  <Text style={styles.name}>Chi</Text>
                  <Text style={styles.price}>{`${info.chi}k`}</Text>
              </View>
          </View>
      </View>

      <View style={styles.containner_binh_quan}>
          <Text style={styles.binh_quan}>Bình quân</Text>
          <Text style={styles.number}>{`${info.thu-info.chi}k`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: '#FFF',
      padding: 8,
      elevation: 6,
      marginBottom: 20
  },
  date: {
  },
  container_chi_thu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 5
  },
  chi_thu: {
    alignItems: 'center',
 },
  icon: {
    width: 70,
    height: 70,
    backgroundColor: '#FFF',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 3,
    display: 'flex',
    elevation: 7,
  },
  info: {
    backgroundColor: '#FFF',
    marginTop: 35,
    height: 125,
    width: 125,
    paddingTop: 40,
    elevation: 6,
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#6DB5CB',
  },
  price: {
    fontSize: 25,
    color: '#FB7034',
  },
  containner_binh_quan: {
      marginVertical: 5,
      marginHorizontal: 15,
      backgroundColor: '#FB7034',
      height: 50,
      borderRadius: 20,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20
  },
  binh_quan: {
      fontSize: 25,
      color: '#FFF'
  },
  number: {
      fontSize: 25,
      color: '#FFF'
  }
});
