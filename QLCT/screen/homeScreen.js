import React from 'react';
import { StyleSheet, Text, View, ScrollView,FlatList, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import CartHome from '../components/cardHome'

export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      giao_dich: [
        {
          id: 1,
          date: '1/1/2020',
          name: 'Gửi xe',
          note: ' Gửi xe hàng tháng',
          chi: 1,
          money: 200
        },
        {
          id: 2,
          date: '2/1/2020',
          name: 'Thuê trọ',
          note: 'Trọ tháng 1',
          chi: 1,
          money: 2000
        },
        {
          id: 3,
          date: '2/1/2020',
          name: 'Rút tiền',
          note: 'Mẹ gửi',
          chi: 0,
          money: 5000
        },
        {
          id: 4,
          date: '1/1/2020',
          name: 'Gửi xe',
          note: ' xe hàng tháng',
          chi: 1,
          money: 200
        },
        // {
        //   id: 5,
        //   date: '1/1/2020',
        //   name: 'Gửi xe',
        //   note: ' Gửi xe  tháng',
        //   chi: 1,
        //   money: 200
        // },
        // {
        //   id: 8,
        //   date: '1/1/2020',
        //   name: 'Gửi xe',
        //   note: ' Gửi x e hàng tháng',
        //   chi: 1,
        //   money: 200
        // },
        // {
        //   id: 9,
        //   date: '1/1/2020',
        //   name: 'Gửi xe',
        //   note: 'Gửi xe hàng tháng',
        //   chi: 1,
        //   money: 200
        // }
      ]
    }
  }

  componentDidMount() {
    console.log('Component DID MOUNT!');
 }

  componentDidUpdate(nextProps, nextState) {
    console.log('Component WILL UPDATE!');
 }

  deleteItem({item}) {
    const index = this.state.giao_dich.indexOf(item);
    const data = this.state.giao_dich.concat();
    const newState = [...data.slice(0,index), ...data.slice(index+1)];
    this.setState({
      giao_dich: newState
      });
    console.log('OK Pressed',index,'\n', data);
  }

  onLongPressFunction({item}) {
    Alert.alert(
      'Xóa giao dịch',
      'Xóa giao dịch ra khỏi bộ nhớ',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
        },
        {
          text: 'OK', 
          onPress: () => this.deleteItem({item}),
        }
      ],
      {cancelable: false},
    );
  }

  render() {
    if(this.state.giao_dich.length == 0)
      return(
        <View style={styles.container}>
        <View style={styles.icon}>
          <Ionicons name={'ios-add'} size={60} color={'#FFF'} 
          onPress={() => {navigation.navigate('GiaoDich', {categoryName: 'Giao dịch'})}}
          />
        </View>
        <Text style={{marginTop: 50}}>Chưa có giao dịch</Text>
        </View>
      );


    const {navigation} = this.props;
    const i = 2;
    return (
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.icon}>
          <Ionicons name={'ios-add'} size={60} color={'#FFF'} 
          onPress={() => {navigation.navigate('GiaoDich', {categoryName: 'Giao dịch'})}}
          />
        </View>
        <FlatList 
          data={this.state.giao_dich}
          renderItem={({item}) => 
            <TouchableOpacity activeOpacity={0.4} onLongPress={() => this.onLongPressFunction({item})}>
              <CartHome style={styles.card} info={item}/>
            </TouchableOpacity>
          }
          style={styles.list}
        />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    alignItems: 'center'
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
  // card: {
  //   // marginVertical: 10,
  //   // width: 20
  // },
  list: {
    width: '100%'
  }
});

