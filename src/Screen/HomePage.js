import React from 'react';
import {View} from 'react-native';
import Navbar from '../Components/Navbar';
import Form from '../Components/Form';
import Footer from '../Components/Footer';

const HomePage = ({navigation}) => {
  return (
    <View>
      <Navbar />
      <Form navigation={navigation} />
      <Footer />
    </View>
  );
};

export default HomePage;
