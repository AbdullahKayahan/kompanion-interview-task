import React, {
    useState,
    useCallback,
    useEffect,
    useLayoutEffect,
    useContext,
} from "react";
import {
    Dimensions,
    StyleSheet,
    FlatList,
    View,
    Text,
    Image,
} from "react-native";
import {
    loadData, searchOperation 
} from "../../mockApi/index";
import {
    ImageItem,
    VideoItem,
    NavigationHeader,
    Loading,
    Label,
} from "../../components/index";
import MainContext from "../../context";
import {
    Colors, DesignTokens 
} from "../../components/theme";
import {
    StringValidation 
} from "../../helpers";

const HomePage = ({
    route, navigation 
}) => {
    const [listData, setListData] = useState(undefined);
    const [searchListData, setSearchListData] = useState(undefined);
    const [viewableItems, setViewableItems] = useState(undefined);
    const [searchText, setSearchText] = useState("");
    const [isSearch, setIsSearch] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const ScreenWidth = Dimensions.get("screen").width - 10;
    const MIN_GRID_ITEM_WIDTH = 200;
    const ROW_COUNT = Math.round(ScreenWidth / MIN_GRID_ITEM_WIDTH);
    const GRID_WIDTH = Math.round(ScreenWidth / ROW_COUNT);

    ///FlatListde görünen item bilgisinde gelecek olan nesnelerin
    ///yüzde kacının ekrana girmesi ile tetikleneceğinin ayarı
    const viewabilityConfig = {
        itemVisiblePercentThreshold: 80,
    };
    useEffect(() => {
        if (StringValidation(searchText)) {
            searchOperation({
                token: route.params.token,
                searchText: searchText,
            }).then((data) => {
                setSearchListData(data);
                setIsLoading(false);
            });
        } else {
            setIsLoading(false);
        }
    }, [searchText]);

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
                        setIsLoading(true);
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
        setIsLoading(true);
        loadData({
            token: route.params.token,
        }).then((data) => {
            setListData(
                data.posts.map((item) => {
                    return {
                        ...item,
                        isPaused:
                            item.content.type === "video" ? true : undefined,
                    };
                })
            );
            setIsLoading(false);
        });
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
                    key={"homeFlatList"}
                    data={listData}
                    keyExtractor={(item) => item.id}
                    initialNumToRender={3}
                    maxToRenderPerBatch={3}
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
                                title={item.title}
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
                                title={item.title}
                                description={item.description}
                                containerStyle={Styles.postCard}
                            />
                        )
                    }
                />
            </View>
        );
    };
    const renderSeachPage = () => {
        return (
            <View style={Styles.mainView}>
                <FlatList
                    key={"searchFlatList"}
                    horizontal={false}
                    data={searchListData}
                    numColumns={ROW_COUNT}
                    keyExtractor={(item) => item.id}
                    keyboardDismissMode="on-drag"
                    keyboardShouldPersistTaps="always"
                    initialNumToRender={3}
                    maxToRenderPerBatch={3}
                    windowSize={5}
                    viewabilityConfig={viewabilityConfig}
                    onViewableItemsChanged={_onVieweableItemsChanged}
                    removeClippedSubviews={true}
                    renderItem={({
                        item, index 
                    }) => {
                        return item.content.type === "video" ? (
                            <VideoItem
                                video={item.content.sources[0]}
                                isGridItem={true}
                                isILikeIt={item.isILikeIt}
                                profilePhoto={item.senderUser.profilePhoto}
                                userName={item.senderUser.fullName}
                                likes={item.likeCount}
                                description={item.description}
                                containerStyle={Styles.postCard}
                                isPaused={item.isPaused}
                                onItemPress={() => {
                                    setSearchListData(
                                        searchListData.map((_item) => {
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
                                isGridItem={true}
                                images={item.content.sources}
                                isILikeIt={item.isILikeIt}
                                profilePhoto={item.senderUser.profilePhoto}
                                userName={item.senderUser.fullName}
                                likes={item.likeCount}
                                description={item.description}
                                containerStyle={Styles.postCard}
                            />
                        );
                    }}
                />
            </View>
        );
    };

    if (isLoading) {
        return <Loading />;
    } else {
        if (isSearch) {
            if (StringValidation(searchText)) {
                return renderSeachPage();
            } else {
                return (
                    <View
                        style={[
                            Styles.mainView,
                            {
                                alignItems: "center",
                                justifyContent: "center",
                            },
                        ]}
                    >
                        <Label
                            text="Arama Yapmadınız."
                            color={Colors.secondaryColor}
                            style={{
                                fontWeight: DesignTokens.fontWeights.bold,
                                fontSize: DesignTokens.fontSizes.header,
                                alignSelf: "center",
                                color: Colors.secondaryColor,
                            }}
                        />
                    </View>
                );
            }
        } else {
            return renderHomePage();
        }
    }
};

const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        padding: DesignTokens.spaces.inline,
    },
});

export default HomePage;
