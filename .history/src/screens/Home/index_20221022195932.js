import React, {useState, useCallback, useEffect} from 'react';
import {StyleSheet, FlatList, View, Text, Image} from 'react-native';
import {loadData} from '../../mockApi/index';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {Colors} from "../../components/theme";
import { ImageItem, VideoItem } from '../../components/index';


const HomePage = ({route, navigation}) => {
 
  const [listData, setListData] = useState(undefined);
  const [ changedItems, setChangedItems ] = useState( undefined );

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


  useEffect(() => {
    if(changedItems){
      
      setListData(changedItems.forEach((item) => {
        if( item.item.content.type === 'video' ){
          draftState.isPausedStates[item.index].isPaused = !item.isViewable;
        }
      }));
    }
  },[changedItems]);

  const _onVieweableItemsChanged = useCallback(({ changed }) => {
    setChangedItems(changed);
  },[]);

if(!listData){
  return <View></View>
}
  return (
    <View style={Styles.mainView}> 
      <FlatList
        //extraData={listData.isPausedStates}
        data={listData.data}
        keyExtractor={item => item.id}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        windowSize={5}
        //viewabilityConfig={viewabilityConfig}
        removeClippedSubviews={true}
        onViewableItemsChanged={_onVieweableItemsChanged}
        renderItem={({item, index}) => (
          item.content.type === 'video'
            ? <VideoItem
              video={item.content.sources[0]}
              isILikeIt={item.isILikeIt}
              profilePicture={item.senderUser.profilePhoto}
              userName={item.senderUser.fullName}
              likes={item.likeCount}
              message={item.description}
              containerStyle={Styles.postCard}
              isPaused={listData.isPausedStates[index].isPaused}
            />
            : <ImageItem
              images={item.content.sources}
              isILikeIt={item.isILikeIt}
              profilePicture={item.senderUser.profilePhoto}
              userName={item.senderUser.fullName}
              likes={item.reactions}
              message={item.description}
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
