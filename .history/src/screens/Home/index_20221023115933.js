import React, {
    useState,
    useCallback,
    useEffect,
    useLayoutEffect,
    useContext,
} from "react";
import {
    StyleSheet, FlatList, View, Text, Image 
} from "react-native";
import {
    loadData 
} from "../../mockApi/index";
import {
    ImageItem, VideoItem, NavigationHeader 
} from "../../components/index";
import MainContext from "../../context";

const HomePage = ({
    route, navigation 
}) => {
    const [listData, setListData] = useState(undefined);
    const [viewableItems, setViewableItems] = useState(undefined);
    const [searchText, setSearchText] = useState(null);
    const [isSearch, setIsSearch] = useState(false);
    const viewabilityConfig = {
        itemVisiblePercentThreshold: 50,
    };
    const {
        logout 
    } = useContext(MainContext);
    useLayoutEffect(() => {
        navigation.setOptions({
            header: ({
                ...props 
            }) => (
                <NavigationHeader
                    {...props}
                    onChangeText={(e) => {
                        setSearchText(e);
                        alert(e);
                    }}
                    leftButtonPress={(_isSearch) => {
                        if (_isSearch) {
                            setIsSearch(false);
                        } else {
                            logout();
                        }
                    }}
                    rightButtonPress={(_isSearch) => {
                        if (!isSearch) {
                            setIsSearch(true);
                        }
                    }}
                />
            ),
        });
    }, [navigation]);

    useEffect(() => {
        loadData({
            token: route.params.token,
        }).then((data) =>
            setListData(
                data.posts.map((item) => {
                    return {
                        ...item,
                        isPaused:
                            item.content.type === "video" ? true : undefined,
                    };
                })
            )
        );
    }, []);

    useEffect(() => {
        if (viewableItems) {
            setListData(
                listData.map((_item) => {
                    const currentItemIndex = viewableItems.findIndex(
                        (e) => e.key === _item.id
                    );

                    if (
                        _item.content.type === "video" &&
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
                })
            );
        }
    }, [viewableItems]);

    const _onVieweableItemsChanged = useCallback(({
        viewableItems 
    }) => {
        setViewableItems(viewableItems);
    }, []);

    const renderHomePage = () => {
        return (
            <View style={Styles.mainView}>
                <FlatList
                    data={listData}
                    keyExtractor={(item) => item.id}
                    initialNumToRender={2}
                    maxToRenderPerBatch={2}
                    windowSize={4}
                    viewabilityConfig={viewabilityConfig}
                    removeClippedSubviews={true}
                    onViewableItemsChanged={_onVieweableItemsChanged}
                    renderItem={({
                        item, index 
                    }) =>
                        item.content.type === "video" ? (
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
                                        listData.map((_item) => {
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
                                        })
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

    if (!listData) {
        return (
            <View>
                <Text>Yükleniyor</Text>
            </View>
        );
    } else {
        if (isSearch) {
            return (
                <View>
                    <Text>SEARCH</Text>
                </View>
            );
        } else {
        }
    }
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
