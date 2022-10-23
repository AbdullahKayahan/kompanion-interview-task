import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Button, TextInput} from '../../components/index.js';
import {Colors, DesignTokens} from '../../components/theme.js';
import FontAwesome from "react-native-vector-icons/dist/FontAwesome";
import MainContext from '../../context/index.js';

const LoginPage = ({navigation}) => {
  const { login } = useContext(MainContext);

  return (
    <View style={Styles.mainView}>
      <Image source={require('../../assets/logo.png')} style={Styles.image} />
      <TextInput
        title={'Kullanıcı Adı'}
        placeholder={'Kullanıcı Adı Giriniz'}
      />
      <TextInput
        title={'Şifre'}
        placeholder={'Şifrenizi Giriniz'}
        secureTextEntry={true}
      />
      <Button
        text={'Login'}
        disabled={false}
        onPress={() => {
          login("Abc");
        }}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    borderRadius: DesignTokens.radiuses.half,
    marginBottom: DesignTokens.spaces.container,
  },
});

export default LoginPage;
