import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Button,TextInput} from '../../components/index.js';
const LoginPage = ({navigation}) => {
  return (
    <View style={Styles.mainView}>
      <Text>Login Page</Text>
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
  textInput: {
    marginBottom: 15,
  },
  logo: {
    marginBottom: 30,
  },
});

export default LoginPage;
