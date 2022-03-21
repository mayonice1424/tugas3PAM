import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Navbar2 = ({data, navigation}) => {
  console.log(data);
  return (
    <View style={gaya.background}>
      <View style={gaya.arrow}>
        <FontAwesome5
          style={gaya.arrow}
          name="arrow-left"
          onPress={() => navigation.goBack()}
        />
      </View>
      <View style={gaya.text}>
        <Text style={gaya.hiling}>Hiling</Text>
        <Text style={gaya.Id}>.ID</Text>
      </View>
      <View style={gaya.tanggal2}>
        <Text style={gaya.tanggal}>{data.tanggal}</Text>
      </View>
    </View>
  );
};

const gaya = StyleSheet.create({
  arrow: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
    color: 'white',
  },
  hiling: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    letterSpacing: 1,
  },
  Id: {
    color: '#6584D3',
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto',
    letterSpacing: 1,
  },
  background: {
    overflow: 'visible',
    flexDirection: 'column',
    backgroundColor: '#6FB23E',
    height: 200,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
    alignItems: 'center',
  },
  tanggal: {
    fontSize: 19,
    marginTop: 1,
    justifyContent: 'center',
    fontFamily: 'poppins',
    color: '#9D2727',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  tanggal2: {
    marginTop: 10,
    marginLeft: 120,
    marginRight: 120,
    borderWidth: 2,
    borderColor: '#CECECE',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#CECE',
    flexDirection: 'row',
    borderRadius: 6,
    color: 'black',
  },
});
export default Navbar2;
