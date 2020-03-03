import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import NgonNgu from '../assets/ngon_ngu.png';
import ThongBao from '../assets/thong_bao.png';
import AboutUs from '../assets/about_us.png';
import Money from '../assets/money-2.png'

export default class SettingsCreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.settings}>
          <Image source={NgonNgu} style={styles.img}/>
          <Text style={styles.text}>Ngôn ngữ</Text>
        </View>
        <View style={styles.settings}>
          <Image source={ThongBao} style={styles.img}/>
          <Text style={styles.text}>Thông báo</Text>
        </View>
        <View style={styles.settings}>
          <Image source={AboutUs} style={styles.img}/>
          <Text style={styles.text}>About us</Text>
        </View>
        <View style={styles.vatata}>
          <Image source={Money} style={{height: 171,width: 150}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  settings: {
    marginTop: 15,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3
  },
  img: {
    height: 60, 
    width: 60,
    marginHorizontal: 10
  },
  text: {
    fontSize: 25,
    color: '#FA6F33'
  },
  vatata: {
    // backgroundColor: '#AAA',
    marginTop: 20,
    height: 172,
    display: 'flex',
    alignItems: 'center'
  }
});
