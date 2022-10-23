import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Button, TextInput} from '../../components/index.js';
import {Colors, DesignTokens} from '../../components/theme.js';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const LoginPage = ({navigation}) => {
  return (
    <View style={Styles.mainView}>
      <FontAwesomeIcon icon="square_check" />
      <Text>
        {' '}
        AAAAA
        <FontAwesomeIcon icon={'home'} />
      </Text>
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
          alert('DEneme');
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
