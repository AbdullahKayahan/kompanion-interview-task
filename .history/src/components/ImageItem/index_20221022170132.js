/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Dimensions,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Label, IconButton} from '../index';
import {Colors, DesignTokens} from '../theme.js';

const ImageItem = ({
  images = [
    require('../../assets/images/image1.jpg'),
    require('../../assets/images/image2.jpg'),
  ],
  isILikeIt,
  likes = 100,
  userName,
  profilePhoto,
  description,
  style,
}) => {
  const [_isILikeIt, setIsILikeIt] = useState(isILikeIt);
  const [likeCount, setLikeCount] = useState(likes);
  const [isLikeButtonPress, setIsLikeButtonPress] = useState(false);
  const [currentImageIndex, setCurenntImageIndex] = useState(0);

  const ScreenWidth = Dimensions.get('screen').width - 10;

  useEffect(() => {
    if (isLikeButtonPress) {
      setLikeCount(_isILikeIt ? likeCount + 1 : likeCount - 1);
      setIsLikeButtonPress(false);
    }
  }, [isLikeButtonPress, _isILikeIt]);

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
            flex: 1,
          }}
        />
        <IconButton icon="ellipsis-v" size={20} color={Colors.primaryColor} />
      </View>
      <View style={{flex: 9}}>
        <Carousel
          data={images}
          sliderWidth={ScreenWidth}
          itemWidth={ScreenWidth}
          renderItem={({item, index}) => (
            <Image
              style={{
                width: ScreenWidth,
                flex: 1,
              }}
              source={item}
            />
          )}
        onSnapToItem={(index) => setCurenntImageIndex(index)}
        />
         <Pagination
                dotsLength={images.length}
                activeDotIndex={currentImageIndex}
                containerStyle={Styles.paginationContainer}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'rgba(255, 255, 255, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />            
      </View>
      <View style={{flex: 3, flexDirection: 'column'}}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <IconButton
            text={likeCount}
            icon={_isILikeIt ? 'heart' : 'heart-o'}
            color={Colors.tertiaryColor}
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
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
          }}>
          <Label
            text={description}
            style={{
              flex: 1,
              alignSelf: 'auto',
              marginTop: DesignTokens.spaces.inline,
            }}
          />
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
    margin: DesignTokens.spaces.inline,
  },
});

export default ImageItem;
