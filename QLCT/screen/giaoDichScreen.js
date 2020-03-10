import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Alert } from 'react-native';
import { connect } from 'react-redux';

import {addItem} from '../components/Actions'

function isDate(s)
{
  const str=s;
  // console.log(typeof(str));
  for(var i=0; i<10; i++)
  {
    if(typeof(str[i]) == "undefined")
      return false;
    console.log(str[i]);
    if(i==2 || i==5)
      continue;
    if(Number.isInteger(parseInt(str[i], 10)) == false )
      return false;
  }
  return true;
}

function isNumber(n) {
  const str=n;
  for(var i=0; i<str.length; i++)
  {
    if(str[i]<'0' || str[i]>'9')
      return false;
  }
  return true;
}

function createItem(id, date, name, note, chi, money) {
  return {
    id: id,
    date: date,
    name: name,
    note: note,
    chi: parseInt(chi, 10),
    money: parseInt(money, 10)
  }
}

class GiaoDichScreen extends React.Component {

  onPressButton({navigation}, date, name, note, chi, money) {
    console.log('press button Luu');

    if(typeof(date)=="undefined" || 
      typeof(name)=="undefined" ||
      typeof(chi)=="undefined" ||
      typeof(money)=="undefined")
    {
      Alert.alert(
        'Chưa điền đủ thông tin',
        'Bạn cần điền đầy đủ thông tin trước khi lưu',
      );
      return 0;
    }
    
    if(isDate(date) == false)
    {
      Alert.alert(
        'Ngày không đúng form',
        'Ngày phải là dạng dd/mm/yyyy',
      );
      return;
    }

    if(chi.length != 1 || (chi[0]!='0' && chi[0]!='1'))
    {
      Alert.alert(
        'Loại giao dịch không đúng',
        'Loại giao dịch phải là số 0 hoặc 1',
      );
      return;
    }

    if(isNumber(money) == false)
    {
      Alert.alert(
        'Số tiền không đúng',
        'Tiền phải có dạng số',
      );
      return;
    }

    const item = createItem(0, date, name, note, chi, money);
    console.log(item);

    const { AddNewItem } = this.props;
    AddNewItem(item);
    console.log("Finish function add");
    navigation.navigate('Home', {categoryName: 'Home'});
  }

  render() {
    var date, name, note, chi, money, test;
    const {navigation} = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.text}>Ngày</Text>
            <TextInput 
              placeholder="dd/mm/yyyy"
              style={styles.input}
              onChangeText={(text) => {date=text}}
              autoCompleteType={'cc-number'}
              keyboardType={'number-pad'}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.text}>Tên giao dịch</Text>
            <TextInput 
              placeholder="Vd: gửi xe"
              style={styles.input}
              onChangeText={(text) => {name=text}}
              // autoCapitalize={'sentences'}
              // autoCompleteType={'password'}
              textContentType={'telephoneNumber'}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.text}>Ghi chú</Text>
            <TextInput 
              placeholder="Vd: gửi xe hàng tháng"
              style={styles.input}
              onChangeText={(text) => {note=text}}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.text}>Loại giao dịch(chi-1 /thu-0)</Text>
            <TextInput 
              placeholder="1/0"
              style={styles.input}
              onChangeText={(text) => {chi=text}}
              keyboardType={'number-pad'}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.text}>Số tiền</Text>
            <TextInput 
              placeholder="Đơn vị: nghìn đồng"
              style={styles.input}
              onChangeText={(text) => {money=text}}
              keyboardType={'number-pad'}
            />
          </View>

          <Button 
            title='Lưu' 
            color='#FE7235' 
            onPress={
              () => this.onPressButton({navigation}, date, name, note, chi, money)
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  form: {
    marginVertical: 10,
    backgroundColor: '#FFF',
    elevation: 4,
    padding: 15
  },
  text: {
    fontSize: 25,
    // paddingLeft: 20
    color: '#FE7235'
  },
  input: {
    marginTop: 10,
    // marginVertical: 10,
    // borderColor: '#6DB5CB',
    borderBottomWidth: 2,
    borderBottomColor: '#6DB5CB',
    // borderLeftWidth: 2,
    // borderLeftColor: '#6DB5CB',
    // backgroundColor: '#BBB',
    paddingHorizontal: 10,
    // borderRadius: 50,
    fontSize: 23,
    // elevation: 2,
    // color: '#5Ck5C5C',
    paddingBottom: 5
  },
  button: {
    // marginHorizontal: 20,
    // marginVertical: 20,
    // padding: 50
  }
});

export default connect(
  state => {
    return {
      data: state
    }
  },
  dispatch => {
    return {
      AddNewItem: (item) => dispatch(addItem(item))
    }
  }
)(GiaoDichScreen);