import React, {
    useState, useCallback, useEffect
} from 'react';
import {
    StyleSheet, FlatList, View, Text, Image
} from 'react-native';
import {
    loadData
} from '../../mockApi/index';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import {
    Colors
} from '../../components/theme';
import {
    ImageItem, VideoItem
} from '../../components/index';

const HomePage = ({
    route, navigation
}) => {
    const [listData, setListData] = useState(undefined);
    const [viewableItems, setViewableItems] = useState(undefined);
    const viewabilityConfig = {
        itemVisiblePercentThreshold: 80,
    };
    useEffect(() => {
        loadData({
            token: route.params.token,
        }).then(data =>
            setListData(
                data.posts.map(item => {
                    return {
                        ...item,
                        isPaused:
                            item.content.type === 'video' ? true : undefined,
                    };
                }),
            ),
        );
    }, []);

    useEffect(() => {
        if (viewableItems) {
            setListData(
                listData.map(_item => {
                    const currentItemIndex = viewableItems.findIndex(
                        e => e.key === _item.id,
                    );

                    if (
                        _item.content.type === 'video' &&
                        currentItemIndex !== -1
                    ) {
                        return {
                            ..._item,
                            isPaused: false,
                        };
                    } else {
                        return {
                            ..._item,
                            isPaused: true,
                        };
                    }
                }),
            );
        }
    }, [viewableItems]);

    const _onVieweableItemsChanged = useCallback(({
        viewableItems
    }) => {
        setViewableItems(viewableItems);
    }, []);

    if (!listData) {
        return <View></View>;
    }
    return (
        <View style={Styles.mainView}>
            <FlatList
                //extraData={listData.isPausedStates}
                data={listData}
                keyExtractor={item => item.id}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                windowSize={5}
                viewabilityConfig={viewabilityConfig}
                removeClippedSubviews={true}
                onViewableItemsChanged={_onVieweableItemsChanged}
                renderItem={({
                    item, index
                }) =>
                    item.content.type === 'video' ? (
                        <VideoItem
                            video={item.content.sources[0]}
                            isILikeIt={item.isILikeIt}
                            profilePhoto={item.senderUser.profilePhoto}
                            userName={item.senderUser.fullName}
                            likes={item.likeCount}
                            description={item.description}
                            containerStyle={Styles.postCard}
                            isPaused={item.isPaused}
                            onItemPress={() => {
                                setListData(
                                    listData.map(_item => {
                                        console.warn(item.id, _item.id);
                                        if (_item.id === item.id) {
                                            return {
                                                ..._item,
                                                isPaused: !item.isPaused,
                                            };
                                        } else {
                                            return {
                                                ..._item,
                                                isPaused: _item.isPaused,
                                            };
                                        }
                                    }),
                                );
                            }}
                        />
                    ) : (
                        <ImageItem
                            images={item.content.sources}
                            isILikeIt={item.isILikeIt}
                            profilePhoto={item.senderUser.profilePhoto}
                            userName={item.senderUser.fullName}
                            likes={item.likeCount}
                            description={item.description}
                            containerStyle={Styles.postCard}
                        />
                    )
                }
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
