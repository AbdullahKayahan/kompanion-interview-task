import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text, Image} from 'react-native';
import {Data} from '../../mockApi/index';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {Colors} from "../../components/theme";
import { ImageItem } from '../../components/index';
const HomePage = ({navigation}) => {
  let data = Data;
  return (
    <View style={Styles.mainView}> 
      <Text>Home Page</Text>
      <ImageItem></ImageItem>
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
  imageStyle: {
    width: 200,
    height: 200,
  },
});

export default HomePage;
