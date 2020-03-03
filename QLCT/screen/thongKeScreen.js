import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CartThongKe from '../components/cardThongKe'

export default class ThongKeCreen extends React.Component {
  constructor() {
    super();
    this.state = {
      thong_ke: [
        {
          id: '01/01/2020',
          chi: 200,
          thu: 250
        },
        {
          id: '02/01/2020',
          chi: 250,
          thu: 250
        },
        {
          id: '03/01/2020',
          chi: 2000,
          thu: 250
        }
      ]
    }
  }
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerOption}>
          <View style={styles.option}>
            <Text style={{color: '#FFF', fontSize: 25, fontWeight: 'bold'}}>Ngày</Text>
          </View>
          <View style={styles.option}>
            <Text style={{color: '#FFF', fontSize: 25, fontWeight: 'bold'}}>Tháng</Text>
          </View>
        </View>

        <FlatList 
          data={this.state.thong_ke}
          renderItem={({item}) => <CartThongKe info={item}/>}
          style={styles.list}
        />
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#fff',
  },
  containerOption: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10
  },
  option: {
    backgroundColor: '#FB7034',
    height: 50,
    width: 100,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
