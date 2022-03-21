import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Navbar = () => {
  return (
    <View style={gaya.background}>
      <View style={gaya.bars}>
        <FontAwesome5 style={gaya.bars} name="bars" />
      </View>
      <Text style={gaya.text}>
        <Text style={gaya.hiling}>Hiling</Text>
        <Text style={gaya.Id}>.ID</Text>
      </Text>
    </View>
  );
};

const gaya = StyleSheet.create({
  bars: {
    marginTop: 10,
    marginLeft: 5,
    fontSize: 20,
    color: 'white',
  },
  hiling: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 120,
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
    marginTop: 115,
  },
  background: {
    flexDirection: 'column',
    backgroundColor: '#6FB23E',
    height: 200,
  },
  text: {
    justifyContent: 'center',
    marginTop: 70,
    textAlign: 'center',
  },
});
export default Navbar;
