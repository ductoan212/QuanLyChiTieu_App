import React from 'react';
import { StyleSheet, Text, View, ScrollView,FlatList, TouchableOpacity, Alert, ImagePickerIOS } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import CartHome from '../components/cardHome';
import delItem from '../components/Actions'

class HomeScreen extends React.Component {

  onLongPressFunction({item}) {
    const { deleteItem } = this.props;
    const {giao_dich} = this.props.data;
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
          onPress: () => {
            const index = giao_dich.indexOf(item);
            deleteItem(index)
          },
        }
      ],
      {cancelable: false},
    );
  }

  render() {
    const {navigation} = this.props;
    const i = 2;
    const {giao_dich} = this.props.data;

    console.log("home Render()", giao_dich);
    if(giao_dich.length == 0)
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

    return (
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.icon}>
          <Ionicons name={'ios-add'} size={60} color={'#FFF'} 
          onPress={() => {navigation.navigate('GiaoDich', {categoryName: 'Giao dịch'})}}
          />
        </View>
        <FlatList 
          data={this.props.data.giao_dich.sort(compare)}
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
    alignItems: 'center',
    
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

function compare(a, b) {
  const dateA = a.date;
  const dateB = b.date;
  
  if (dateA > dateB) {
    return -1;
  }

  return 1;
}

export default connect(
  state => {
    return {
      data: state
    }
  },
  dispatch => {
    return {
      deleteItem: (index) => dispatch(delItem(index))
    }
  }
)(HomeScreen);

