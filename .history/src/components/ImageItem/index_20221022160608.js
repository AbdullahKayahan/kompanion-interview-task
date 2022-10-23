import React from 'react';
import {View, TouchableOpacity, StyleSheet,Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Label,IconButton} from "../index";
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
    <View style={{flex:12, flexDirection:"column", 
    backgroundColor:"red", 
    margin: DesignTokens.spaces.inline,
    borderRadius: DesignTokens.radiuses.half
    
    }}>
        <View style={{flex:1, flexDirection:"row", alignItems:"center" ,}} >
        <Image
            source={require("../../assets/images/image1.jpg")}
            style={Styles.profilePhotoStyle}
        />
        <Label text='UserName' style={{fontWeight:DesignTokens.fontWeights.bold, fontSize: DesignTokens.fontSizes.header }}></Label>
        </View>
        <View style={{flex:10, backgroundColor:"blue"}}>
        <Image
            source={require("../../assets/images/image1.jpg")}
            style={{flex:1}}
        />
        </View>
        <View style={{flex:1, flexDirection:"row"}}>

        <IconButton text={"250"} icon={"heart-o"} color={Colors.tertiaryColor} />
        </View>
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
    borderRadius: DesignTokens.radiuses.full,
    margin: DesignTokens.spaces.item
  }
});

export default ImageItem;
