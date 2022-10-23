import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text,Image} from 'react-native';
import {data} from "../../mockApi/index";
const HomePage = ({navigation}) => {

  return (
    <View style={Styles.mainView}>
      <Text>Home Page</Text>
      <Image source={data[0].content.source[0]}  />
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

export default HomePage;
