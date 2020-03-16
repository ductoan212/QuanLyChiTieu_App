import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Button, Alert, Picker } from 'react-native';
import { connect } from 'react-redux';
import DatePicker from 'react-native-datepicker'

import {addItem} from '../components/Actions'

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
var name, note, money;

class GiaoDichScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: 1,
      date: ""
    }
  }

  onPressButton({navigation}, date, name, note, chi, money) {
    console.log('press button Luu');

    console.log("date:", date);
    console.log("name:", name);
    console.log("note:", note);
    console.log("chi:", chi);
    console.log("money:", money);

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

    if(isNumber(money) == false)
    {
      Alert.alert(
        'Số tiền không đúng',
        'Tiền phải có dạng số',
      );
      return;
    }

    const item = createItem(0, date, name, note, chi, money);
    console.log("\n*********************",item,"\n*********************");

    const { AddNewItem } = this.props;
    AddNewItem(item);
    navigation.navigate('Home', {categoryName: 'Home'});
  }

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.form}>
            <Text style={styles.text}>Ngày</Text>
            <DatePicker
              style={{width: '100%'}}
              date={this.state.date}
              mode="date"
              placeholder="Chọn ngày"
              format="YYYY-MM-DD"
              showIcon={false}
              customStyles={{
                dateInput: {
                  borderWidth: 0,
                  borderBottomWidth: 2,
                  borderBottomColor: '#6DB5CB',
                  alignItems: 'flex-start',
                  paddingLeft: 10
                },
                dateText: {
                  fontSize: 23,
                },
                placeholderText: {
                  fontSize: 23
                }
              }}
              onDateChange={(date) => {this.setState({date: date})
              console.log(typeof(date), date)}}
            />
          </View>

          <View style={styles.form}>
            <Text style={styles.text}>Tên giao dịch</Text>
            <TextInput 
              placeholder="Vd: gửi xe"
              style={styles.input}
              onChangeText={(text) => {name=text}}
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
            <Picker
              style={styles.input}
              selectedValue={this.state.selected}
              textStyle={{fontSize: 20, color: 'orange'}}
              onValueChange={(itemValue) => {
                this.setState({selected: itemValue});
                console.log(this.state.selected)}}
              mode ={'dropdown'}
              >
              <Picker.Item label="Chi" value= {1} style={{fontSize: 25, height: 50}}/>
              <Picker.Item label="Thu" value= {0} style={{fontSize: 25}}/>
            </Picker>
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
              () => this.onPressButton({navigation}, this.state.date, name, note, this.state.selected, money)
            }
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  form: {
    marginVertical: 10,
    backgroundColor: '#FFF',
    elevation: 4,
    padding: 15
  },
  text: {
    fontSize: 25,
    color: '#FE7235'
  },
  input: {
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#6DB5CB',
    paddingHorizontal: 10,
    fontSize: 23,
    paddingBottom: 5
  },
  button: {
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