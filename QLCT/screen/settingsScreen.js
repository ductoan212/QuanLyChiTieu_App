import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';

import NgonNgu from '../assets/ngon_ngu.png';
import ThongBao from '../assets/thong_bao.png';
import AboutUs from '../assets/about_us.png';
import Money from '../assets/money-2.png'

function onPressNgonNgu() {
  Alert.alert('Chức năng đang hoàn thiện');
}

function onPressThongBao() {
  Alert.alert('Chức năng đang hoàn thiện');
}

function onPressAboutUs() {
  Alert.alert('Quản lý chi tiêu - RN');
}

export default class SettingsCreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5} style={styles.settings} onPress={() => onPressNgonNgu()}>
          <Image source={NgonNgu} style={styles.img}/>
          <Text style={styles.text} >Ngôn ngữ</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.settings} onPress={() => onPressThongBao()}>
          <Image source={ThongBao} style={styles.img}/>
          <Text style={styles.text}>Thông báo</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.settings} onPress={() => onPressAboutUs()}>
          <Image source={AboutUs} style={styles.img}/>
          <Text style={styles.text}>About us</Text>
        </TouchableOpacity>
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
    marginTop: 20,
    height: 172,
    display: 'flex',
    alignItems: 'center'
  }
});
