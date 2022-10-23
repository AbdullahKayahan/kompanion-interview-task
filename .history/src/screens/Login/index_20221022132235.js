import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Button, TextInput} from '../../components/index.js';
import {DesignTokens} from '../../components/theme.js';
import MainContext from '../../context/index.js';
import {StringValidation} from '../../helpers/index.js';

const LoginPage = ({navigation}) => {
  const {login} = useContext(MainContext);
  const [buttonEnabled, setButtonEnabled] = useState(true);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    setButtonEnabled(
      StringValidation(userName) && StringValidation(password),
    );
  }, [userName, password]);

  return (
    <View style={Styles.mainView}>
      <Image source={require('../../assets/logo.png')} style={Styles.image} />
      <TextInput
        title={'Kullanıcı Adı'}
        placeholder={'Kullanıcı Adı Giriniz'}
        onChangeText={_value => {
          setUserName(_value);
        }}
      />
      <TextInput
        title={'Şifre'}
        placeholder={'Şifrenizi Giriniz'}
        secureTextEntry={true}
        onChangeText={_value => {
          setPassword(_value);
        }}
      />
      <Button
        text={'Login'}
        disabled={!buttonEnabled}
        onPress={() => {
          login('Abc');
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
