import React from 'react';
import { StyleSheet, Text, View, ScrollView,FlatList } from 'react-native';
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
          note: ' Gửi xe hàng tháng',
          chi: 1,
          money: 200
        },
        {
          id: 5,
          date: '1/1/2020',
          name: 'Gửi xe',
          note: ' Gửi xe hàng tháng',
          chi: 1,
          money: 200
        },
        {
          id: 6,
          date: '1/1/2020',
          name: 'Gửi xe',
          note: ' Gửi xe hàng tháng',
          chi: 1,
          money: 200
        },
        {
          id: 7,
          date: '1/1/2020',
          name: 'Gửi xe',
          note: ' Gửi xe hàng tháng',
          chi: 1,
          money: 200
        }
      ]
    }
  }

  render() {
    const {navigation} = this.props;

    return (
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.icon}>
          <Ionicons name={'ios-add'} size={60} color={'#FFF'} 
          onPress={() => {navigation.navigate('GiaoDich', {categoryName: 'Giao dịch'})}}
          />
        </View>
        {/* <CartHome style={styles.card}/>
        <CartHome style={styles.card}/>
        <CartHome style={styles.card}/>
        <CartHome style={styles.card}/>
        <CartHome style={styles.card}/>
        <CartHome style={styles.card}/> */}
        <FlatList 
          data={this.state.giao_dich}
          renderItem={({item}) => <CartHome style={styles.card} info={item}/>}
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
