import React from 'react';
import {View, TouchableOpacity, StyleSheet,Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Label} from "../index";
import {Colors, DesignTokens} from '../theme.js';
const ImageItem = ({
  images,
  likes,
  userName,
  profilePhoto,
  description,
  style
}) => {
  return (
    <View style={{flex:10, flexDirection:"column", backgroundColor:"red"}}>
        <View style={{backgroundColor:"pink", flex:1, flexDirection:"row"}} >
        <Image
            source={require("../../assets/images/image1.jpg")}
            style={Styles.profilePhotoStyle}
        />
        <Label text='UserName'></Label>
        </View>
        <View style={{flex:8, backgroundColor:"pink"}}>

        </View>
        <View style={{flex:1,backgroundColor:"yellow"}}></View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: DesignTokens.heights.iconButton,
    width: DesignTokens.widths.iconButton,
    borderRadius: DesignTokens.radiuses.quarter,
    backgroundColor: Colors.primaryColor,
  },
  profilePhotoStyle: {
    height: 50,
    width: 50,
  }
});

export default ImageItem;
