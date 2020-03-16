import React from 'react';
import { AsyncStorage } from 'react-native'
import { StyleSheet, Text, View, ScrollView,FlatList, TouchableOpacity, Alert, ImagePickerIOS } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import CartHome from '../components/cardHome';
import delItem from '../components/Actions'
import { loadData } from '../components/Actions'
import { saveData } from '../components/Actions'

class HomeScreen extends React.Component {

  setItemStore = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    }
    catch (error) {
      console.log('Saving is error');
    }
  };

  getItemStore = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if( value != null ) {
        return value;
      }
      else
        console.log('Data is null');
    }
    catch (error) {
      console.log('Reading is error');
    }
  }

  saveStore = (key, value) => {
    this.setItemStore(key, value);
  }

  readStore = (key) => {
    this.getItemStore(key).then( result => {
      return result;
    })
  }

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

  componentWillMount() {
    console.log("Begin_______componentWillMount in homeScreen")
    var gd, id;
    this.getItemStore('giao_dich').then( (result) => {
      gd = JSON.parse(result);
      this.getItemStore('id').then( (result) => {
        id = JSON.parse(result);
        const {loadData} = this.props;
        loadData(gd, id);
      })
    })
    console.log("End_______componentWillMount in homeScreen")
  }

  componentDidUpdate() {
    console.log("Begin_______componentWill UnMount in homeScreen")
    let {giao_dich} = this.props.data;
    let {id} = this.props.data;
    let gd = JSON.stringify(giao_dich);
    id = JSON.stringify(id);
    this.setItemStore('giao_dich', gd);
    this.setItemStore('id', id);
    console.log("End_______componentWill UnMount in homeScreen")
  }

  render() {
    const {navigation} = this.props;
    let {giao_dich} = this.props.data;
    console.log("\n giao_dich in homeScreen:", giao_dich);
    if(typeof(giao_dich)=="undefined" || giao_dich.length == 0)
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
    let arrGD = this.props.data.giao_dich.slice();
    return (
      <ScrollView>
        <View style={styles.container}>
        <View style={styles.icon}>
          <Ionicons name={'ios-add'} size={60} color={'#FFF'}
          onPress={() => {navigation.navigate('GiaoDich', {categoryName: 'Giao dịch'})}}
          />
        </View>
        <FlatList
          // data={this.props.data.giao_dich.sort(compare)}
          data={arrGD.sort(compare)}
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
      deleteItem: (index) => dispatch(delItem(index)),
      loadData: (giao_dich, id) => dispatch(loadData(giao_dich, id)),
      saveData: (giao_dich, id) => dispatch(saveData(giao_dich, id))
    }
  }
)(HomeScreen);

