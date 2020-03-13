import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import CartThongKe from '../components/cardThongKe';
import { connect } from 'react-redux';

function creactItem(giao_dich)
{
  var item = {
    id: giao_dich.date,
    chi: 0,
    thu: 0
  }

  if(giao_dich.chi == 1)
    item.chi = giao_dich.money;
  else
    item.thu = giao_dich.money;

  return item;
}

function creactItem_Month(giao_dich)
{
  var item = {
    id: giao_dich.date.slice(3),
    chi: 0,
    thu: 0
  }

  if(giao_dich.chi == 1)
    item.chi = giao_dich.money;
  else
    item.thu = giao_dich.money;

  return item;
}

function createArrTK(giao_dich)
{
  var thong_ke = [];
  if(giao_dich.length == 0)
    return [];

  thong_ke.push(creactItem(giao_dich[0]));
  for(var i=1; i<giao_dich.length; i++)
  {
    var flag = true;
    var index = 0;
    for(var j=0; j<thong_ke.length; j++)
    {
      if(giao_dich[i].date == thong_ke[j].id)
      {
        flag = false;
        index = j;
        break;
      }
    }
    var item = creactItem(giao_dich[i]);
    if(flag)
    {
      thong_ke.push(item);
    }
    else
    {
      thong_ke[j].chi += item.chi;
      thong_ke[j].thu += item.thu;
    }
  }

  return thong_ke;
}

function createArrTK_Month(giao_dich)
{
  var thong_ke = [];
  if(giao_dich.length == 0)
    return [];

  thong_ke.push(creactItem_Month(giao_dich[0]));
  for(var i=1; i<giao_dich.length; i++)
  {
    var flag = true;
    var index = 0;
    for(var j=0; j<thong_ke.length; j++)
    {
      if(giao_dich[i].date.slice(3) == thong_ke[j].id)
      {
        flag = false;
        index = j;
        break;
      }
    }
    var item = creactItem_Month(giao_dich[i]);
    if(flag)
    {
      thong_ke.push(item);
    }
    else
    {
      thong_ke[j].chi += item.chi;
      thong_ke[j].thu += item.thu;
    }
  }

  return thong_ke;
}

var bg_ngay = '#FB7034', color_ngay = '#FFF';
var bg_thang = '#FFF', color_thang = '#FB8034';

class ThongKeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      option: 'ngay'
    }
  }
  
  onPressNgay() {
    this.setState({option: 'ngay'});
    console.log("set ngay", this.state);
    bg_ngay = '#FB7034';
    color_ngay = '#FFF';
    bg_thang = '#FFF';
    color_thang = '#FB8034';
  }
  onPressThang() {
    this.setState({option: 'thang'});
    console.log("set thang",this.state);
    bg_thang = '#FB7034';
    color_thang = '#FFF';
    bg_ngay = '#FFF';
    color_ngay = '#FB8034';
  }
  
  render() {
    var data = createArrTK(this.props.giao_dich).sort(compare);
    if(this.state.option == 'thang')
      data = createArrTK_Month(this.props.giao_dich).sort(compare);
    
    return (
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerOption}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => this.onPressNgay()}>
            <View style={{
              backgroundColor: bg_ngay,
              height: 50,
              width: 100,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{color: color_ngay, fontSize: 25, fontWeight: 'bold'}}>Ngày</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6}  onPress={() => this.onPressThang()}>
            <View style={{
              backgroundColor: bg_thang,
              height: 50,
              width: 100,
              borderRadius: 25,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{color: color_thang, fontSize: 25, fontWeight: 'bold'}}>Tháng</Text>
            </View>
          </TouchableOpacity>
        </View>

        <FlatList 
          data={data}
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
  },
  containerOption: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 10
  },
  option: {
    // backgroundColor: bg,
    height: 50,
    width: 100,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

function compare(a, b) {
  const idA = a.id;
  const idB = b.id;
  
  if (idA > idB) {
    return -1;
  }

  return 1;
}

export default connect(state => {
  return {
    giao_dich: state.giao_dich
  }
} )(ThongKeScreen);