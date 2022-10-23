import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Button} from '../../components/index.js';
const LoginPage = ({navigation}) => {
  return (
    <View style={Styles.mainView}>
      <Text>Login Page</Text>
      <Button 
        text:"Deneme"
        disabled:false
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
  textInput: {
    marginBottom: 15,
  },
  logo: {
    marginBottom: 30,
  },
});

export default LoginPage;
