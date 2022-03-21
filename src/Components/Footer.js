import React from 'react';
import {View, Text, StyleSheet, Color} from 'react-native';

const Footer = () => {
  return (
    <View>
      <View style={gayafooter.textfooter}>
        <Text style={gayafooter.textfooter}>
          &copy;Ilham Nofri Yandra - 119140133
        </Text>
      </View>
    </View>
  );
};

const gayafooter = StyleSheet.create({
  textfooter: {
    marginTop: 80,
    fontFamily: 'Open Sans',
    fontSize: 17,
    fontWeight: '500',
    textAlign: 'center',
    color: '#65679B',
  },
});

export default Footer;
