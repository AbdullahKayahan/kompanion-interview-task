import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text,Image} from 'react-native';
import {Data} from "../../mockApi/index";
const HomePage = ({navigation}) => {
let data= Data;
  return (
    <View style={Styles.mainView}>
      <Text>Home Page</Text>
      <Image source={Data.posts[0].content.sources[0]} style={Styles.imageStyle} />
      <Image source={Data.posts[1].content.sources[0]} style={Styles.imageStyle} />
      <Image source={Data.posts[2].content.sources[0]} style={Styles.imageStyle} />
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
  imageStyle:{
    width:200,
    height:200,
  }
});

export default HomePage;
