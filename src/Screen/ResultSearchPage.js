import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Navbar2 from '../Components/Navbar2';
import Footer from '../Components/Footer';

import Resultprocess from './Resultprocess';

const ResultSearchPage = ({route, navigation}) => {
  return (
    <View>
      <Navbar2 navigation={navigation} data={route.params.data} />
      <Resultprocess navigation={navigation} data={route.params.data} />
      <Footer />
    </View>
  );
};

export default ResultSearchPage;
