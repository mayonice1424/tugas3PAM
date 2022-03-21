import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Form = ({navigation}) => {
  const [text, onChangeText] = useState({
    keberangkatan: '',
    tujuan: '',
    tanggal: '',
  });
  const clickHandler = textInput => {
    return value => {
      onChangeText({...text, [textInput]: value});
    };
  };
  return (
    <View>
      <View style={gayaform.backgroundbigbox}>
        <View style={gayaform.backgroundup}>
          <FontAwesome5 style={gayaform.icon} name="plane-departure" />
          <TextInput
            style={gayaform.textinput}
            placeholder="Masukkan datang "
            placeholderTextColor={'#65679B'}
            color="#65679B"
            value={text.keberangkatan}
            onChangeText={clickHandler('keberangkatan')}
          />
        </View>
        <View style={gayaform.backgrounddown}>
          <FontAwesome5 style={gayaform.icon} name="plane-arrival" />
          <TextInput
            style={gayaform.textinput}
            placeholder="Masukkan tujuan "
            placeholderTextColor={'#65679B'}
            value={text.tujuan}
            color="#65679B"
            onChangeText={clickHandler('tujuan')}
          />
        </View>
        <View style={gayaform.backgroundschedule}>
          <FontAwesome5 style={gayaform.icon} name="calendar-check" />
          <TextInput
            style={gayaform.textinput}
            placeholder="Masukkan jadwal "
            placeholderTextColor={'#65679B'}
            color="#65679B"
            onChangeText={clickHandler('tanggal')}
            value={text.tanggal}
          />
        </View>
        <View>
          <TouchableOpacity
            style={gayaform.tombol}
            onPress={() =>
              navigation.navigate('ResultSearchPage', {data: text})
            }>
            <Text style={gayaform.textonbutton}>Cari Jadwal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const gayaform = StyleSheet.create({
  icon: {
    fontSize: 30,
    color: '#6FB23E',
    alignItems: 'center',
    marginRight: 60,
    marginTop: 10,
    marginBottom: 10,
    borderRightColor: 'black',
  },
  backgroundup: {
    marginTop: -30,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'chartreuse',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 6,
  },
  backgrounddown: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'chartreuse',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 6,
  },
  backgroundschedule: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'chartreuse',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 6,
  },
  backgroundbigbox: {
    justifyContent: 'center',
    marginLeft: 30,
    marginRight: 20,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    height: 400,
    borderRadius: 20,
    border: 10,
  },
  tombol: {
    marginTop: 30,
    marginLeft: 30,
    marginRight: 30,
    borderWidth: 1,
    borderColor: 'chartreuse',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#6FB23E',
    borderRadius: 6,
    height: 50,
    alignItems: 'center',
  },
  textonbutton: {
    color: 'white',
    fontSize: 18,
  },
  textinput: {
    fontSize: 16,
  },
});
export default Form;
