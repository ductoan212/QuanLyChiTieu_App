import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button } from 'react-native';

export default class GiaoDichScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.text}>Ngày</Text>
            <TextInput 
              placeholder="dd/mm/yyyy"
              style={styles.input}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.text}>Tên giao dịch</Text>
            <TextInput 
              placeholder="Vd: gửi xe"
              style={styles.input}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.text}>Ghi chú</Text>
            <TextInput 
              placeholder="Vd: gửi xe hàng tháng"
              style={styles.input}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.text}>Loại giao dịch</Text>
            <TextInput 
              placeholder="Chi/Thu"
              style={styles.input}
              autoCompleteType='cc-exp'
            />
          </View>

          <Button title='Lưu' color='#FE7235'/>
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
    marginTop: 20,
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
    borderColor: '#6DB5CB',
    borderWidth: 1,
    // backgroundColor: '#BBB',
    paddingHorizontal: 10,
    borderRadius: 50,
    fontSize: 23,
    elevation: 2,
    color: '#5C5C5C'
  },
  button: {
    // marginHorizontal: 20,
    // marginVertical: 20,
    // padding: 50
  }
});
