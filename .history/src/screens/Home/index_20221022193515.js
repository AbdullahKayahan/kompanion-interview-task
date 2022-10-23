import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text, Image} from 'react-native';
import {loadData} from '../../mockApi/index';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {Colors} from "../../components/theme";
import { ImageItem, VideoItem } from '../../components/index';


const HomePage = ({route, navigation}) => {
 
  const [listData, setListData] = useState(undefined);
  
  useEffect(() => {
    loadData({ token : route.params.token})
      .then(data => setListData({
        data : data.posts,
        isPausedStates : data.posts.map(item => ({
          id : item.id,
          isPaused : item.content.type === 'video' ? true : undefined
        }))
      }));
  },[]);

  return (
    <View style={Styles.mainView}> 
      <FlatList
        extraData={listData.isPausedStates}
        data={listData.data}
        keyExtractor={item => item.id}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={5}
        //viewabilityConfig={viewabilityConfig}
        removeClippedSubviews={true}
        //onViewableItemsChanged={_onVieweableItemsChanged}
        renderItem={({item, index}) => (
          item.type === 'video'
            ? <VideoItem
              video={item.content.sources[0]}
              profilePicture={item.postedBy.profilePicture}
              userName={item.postedBy.userName}
              reactions={item.reactions}
              message={item.message}
              containerStyle={Styles.postCard}
              isPaused={listData.isPausedStates[index].isPaused}
            />
            : <ImageItem
              images={item.content.sources}
              profilePicture={item.postedBy.profilePicture}
              userName={item.postedBy.userName}
              reactions={item.reactions}
              message={item.message}
              containerStyle={Styles.postCard}
            />
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  mainView: {
    flex: 1,
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
