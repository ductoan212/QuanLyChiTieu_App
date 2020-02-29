import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CartHome from '../components/cardHome'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.icon}>
          <Ionicons name={'ios-add'} size={60} color={'#FFF'} />
        </View>
        <CartHome style={styles.card}/>
        <CartHome style={styles.card}/>
        <CartHome style={styles.card}/>
        <CartHome style={styles.card}/>
        <CartHome style={styles.card}/>
        <CartHome style={styles.card}/>
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    marginTop: 10,
    backgroundColor: '#FE7235',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#FFB696',
    borderWidth: 4
  },
  card: {
    marginVertical: 10
  }
});
