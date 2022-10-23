/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Dimensions, View, StyleSheet, Image} from 'react-native';
import Video from "react-native-video";
import {LikeCountString} from '../../helpers';
import {Label, IconButton} from '../index';
import {Colors, DesignTokens} from '../theme.js';

const VideoItem = ({
  video = require("../../assets/videos/video3.mp4"),
  isILikeIt,
  likes = 1500,
  userName,
  profilePhoto,
  description,
  style,
}) => {
  const [_isILikeIt, setIsILikeIt] = useState(isILikeIt);
  const [likeCount, setLikeCount] = useState(likes);
  const [isLikeButtonPress, setIsLikeButtonPress] = useState(false);


  const ScreenWidth = Dimensions.get('screen').width - 10;

  useEffect(() => {
    if (isLikeButtonPress) {
      setLikeCount(parseInt(_isILikeIt ? likeCount + 1 : likeCount - 1));
      setIsLikeButtonPress(false);
    }
  }, [isLikeButtonPress, _isILikeIt]);

  return (
    <View style={Styles.container}>
      <View style={Styles.headerContainer}>
        <Image
          source={require('../../assets/images/image1.jpg')}
          style={Styles.profilePhotoStyle}
        />
        <Label
          text="UserName"
          style={{
            fontWeight: DesignTokens.fontWeights.bold,
            fontSize: DesignTokens.fontSizes.header,
            flex: 1,
          }}
        />
        <IconButton
          icon="ellipsis-v"
          size={20}
          color={Colors.primaryColor}
          onPress={() => {
            alert('Paylaş Sayfası');
          }}
        />
      </View>
      <View style={Styles.carouselContainer}>
      <Video 
      controls={true}
      style={{
                width : ScreenWidth, 
               flex:1
            }}
            source={video}
           
        />
      </View>
      <View style={Styles.bottomContainer}>
        <View style={Styles.detailContainer}>
          <IconButton
            text={LikeCountString(parseFloat(likeCount))}
            icon={_isILikeIt ? 'heart' : 'heart-o'}
            color={Colors.secondaryColor}
            style={{
              backgroundColor: Colors.cardBackground,
              margin: DesignTokens.spaces.item,
            }}
            onPress={() => {
              setIsILikeIt(!_isILikeIt);
              setIsLikeButtonPress(true);
            }}
          />
        </View>
        <View style={Styles.descriptionContainer}>
          <Label text={description} style={Styles.descriptionLabel} />
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 12,
    flexDirection: 'column',
    backgroundColor: Colors.cardBackground,
    margin: DesignTokens.spaces.inline,
    borderRadius: DesignTokens.radiuses.half,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePhotoStyle: {
    height: 50,
    width: 50,
    borderRadius: DesignTokens.radiuses.full,
    margin: DesignTokens.spaces.inline,
  },
  carouselContainer: {
    flex: 9,
    marginVertical: DesignTokens.spaces.item,
  },
  paginationContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -45,
  },
  dotStyle: {
    width: DesignTokens.pagination.dotWidth,
    height: DesignTokens.pagination.dotHeight,
    borderRadius: DesignTokens.radiuses.half,
    borderWidth: DesignTokens.borders.indicator,
    borderColor: Colors.secondaryColor,
    backgroundColor: Colors.secondaryColor,
  },
  bottomContainer: {
    flex: 2,
    flexDirection: 'column',
  },
  detailContainer: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  descriptionContainer: {
    flex: 4,
    flexDirection: 'row',
  },
  descriptionLabel: {
    flex: 1,
    alignSelf: 'auto',
    marginTop: DesignTokens.spaces.inline,
    marginLeft: DesignTokens.spaces.inline,
  },
});

export default VideoItem;
