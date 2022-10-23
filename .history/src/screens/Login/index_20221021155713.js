import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Button,TextInput} from '../../components/index.js';
import {Colors, DesignTokens} from '../../components/theme.js'
const LoginPage = ({navigation}) => {
  return (
    <View style={Styles.mainView}>
     <Image source={require('../../assets/logo.png')} style={Styles.image}/>
      <TextInput
      title={"Kullanıcı Adı"}/>
      <TextInput title={"Şifre"}/>
      <Button text={'Deneme'} disabled={false}  onPress={()=>{
        alert("DEneme")
      }}/>
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
    borderRadius: DesignTokens.radiuses.full,
    marginBottom: DesignTokens.spaces.container,
  },
});

export default LoginPage;
