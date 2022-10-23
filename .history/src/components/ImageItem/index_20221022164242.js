/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Label, IconButton} from '../index';
import {Colors, DesignTokens} from '../theme.js';

const ImageItem = ({
  images,
  isILikeIt,
  likes=100,
  userName,
  profilePhoto,
  description,
  style,
}) => {
    const [_isILikeIt, setIsILikeIt] = useState(isILikeIt);
    const [likeCount, setLikeCount] = useState(likes)
    const [isLikeButtonPress,setIsLikeButtonPress] = useState(false);

    useEffect(() => {
        if(isLikeButtonPress){
            setLikeCount( (_isILikeIt) ? likeCount+1: likeCount-1);
            setIsLikeButtonPress(false);
        }
        
      }, [isLikeButtonPress, _isILikeIt ]);
    
    return (
    <View
      style={{
        flex: 12,
        flexDirection: 'column',
        backgroundColor: Colors.cardBackground,
        margin: DesignTokens.spaces.inline,
        borderRadius: DesignTokens.radiuses.half,
      }}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={require('../../assets/images/image1.jpg')}
          style={Styles.profilePhotoStyle}
        />
        <Label
          text="UserName"
          style={{
            fontWeight: DesignTokens.fontWeights.bold,
            fontSize: DesignTokens.fontSizes.header,
            flex:1,
          }}
        />
        <IconButton icon='ellipsis-v' size={20} color={Colors.primaryColor}></IconButton>
      </View>
      <View style={{flex: 9}}>
        <Image
          source={require('../../assets/images/image1.jpg')}
          style={{flex: 1}}
        />
      </View>
      <View style={{flex: 3, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <IconButton
            text={likeCount}
            icon={_isILikeIt? 'heart' :'heart-o'}
            color={Colors.tertiaryColor}
            style={{
              backgroundColor: Colors.cardBackground,
              margin: DesignTokens.spaces.item,
            }}
            onPress={()=>{
                setIsILikeIt(!_isILikeIt);
                setIsLikeButtonPress(true);
            
            }}
          />
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            
            backgroundColor: 'red',
          }}
        >
            <Label text={description} style={{flex:1, backgroundColor:"blue", alignSelf:"auto" }}/>
        </View>
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
    margin: DesignTokens.spaces.item,
  },
});

export default ImageItem;
