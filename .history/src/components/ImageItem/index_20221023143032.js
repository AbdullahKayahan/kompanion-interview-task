import React, {
    useState, useEffect 
} from "react";
import {
    Dimensions, View, StyleSheet, Image 
} from "react-native";
import Carousel, {
    Pagination 
} from "react-native-snap-carousel";
import {
    LikeCountString 
} from "../../helpers";
import {
    Label, IconButton 
} from "../index";
import {
    Colors, DesignTokens 
} from "../theme.js";

const ImageItem = ({
    images,
    isILikeIt,
    likes,
    userName,
    profilePhoto,
    description,
    isGridItem,
    title,
    style,
}) => {
    const [_isILikeIt, setIsILikeIt] = useState(isILikeIt);
    const [likeCount, setLikeCount] = useState(likes);
    const [isLikeButtonPress, setIsLikeButtonPress] = useState(false);
    const [currentImageIndex, setCurenntImageIndex] = useState(0);

    const ScreenWidth = Dimensions.get("screen").width - 30;
    const MIN_GRID_ITEM_WIDTH = 200;
    const ROW_COUNT = Math.round(ScreenWidth / MIN_GRID_ITEM_WIDTH);
    const GRID_WIDTH = Math.round(ScreenWidth / ROW_COUNT);

    useEffect(() => {
        if (isLikeButtonPress) {
            setLikeCount(parseInt(_isILikeIt ? likeCount + 1 : likeCount - 1));
            setIsLikeButtonPress(false);
        }
    }, [isLikeButtonPress, _isILikeIt]);

    if (isGridItem) {
        return (
            <View style={Styles.gridCarouselContainer}>
                <Carousel
                    data={images}
                    sliderWidth={GRID_WIDTH}
                    itemWidth={GRID_WIDTH}
                    renderItem={({
                        item, index 
                    }) => (
                        <Image
                            style={{
                                width: GRID_WIDTH,
                                height: GRID_WIDTH,
                                borderRadius: DesignTokens.radiuses.half,
                            }}
                            source={item}
                        />
                    )}
                    onSnapToItem={(index) => setCurenntImageIndex(index)}
                />
                <Pagination
                    dotsLength={images.length}
                    activeDotIndex={currentImageIndex}
                    containerStyle={Styles.gridPaginationContainer}
                    dotStyle={Styles.dotStyle}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
        );
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.headerContainer}>
                <Image
                    source={{
                        uri: profilePhoto,
                    }}
                    style={Styles.profilePhotoStyle}
                />
                <Label
                    text={userName}
                    style={{
                        fontWeight: DesignTokens.fontWeights.bold,
                        fontSize: DesignTokens.fontSizes.text,
                        flex: 1,
                    }}
                />
                <IconButton
                    icon="ellipsis-v"
                    size={20}
                    color={Colors.primaryColor}
                    onPress={() => {
                        alert("Paylaş Sayfası");
                    }}
                />
            </View>
            <View style={Styles.carouselContainer}>
                <Carousel
                    data={images}
                    sliderWidth={ScreenWidth}
                    itemWidth={ScreenWidth}
                    renderItem={({
                        item, index 
                    }) => (
                        <Image
                            style={{
                                width: ScreenWidth,
                                height: ScreenWidth,
                                borderRadius: DesignTokens.radiuses.half,
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
                    dotStyle={Styles.dotStyle}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View>
            <View style={Styles.bottomContainer}>
                <View style={Styles.detailContainer}>
                    <IconButton
                        text={LikeCountString(parseFloat(likeCount))}
                        icon={_isILikeIt ? "heart" : "heart-o"}
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
                    <Label
                        text={title}
                        style={{
                            fontWeight: DesignTokens.fontWeights.bold,
                            fontSize: DesignTokens.fontSizes.subtitle,
                            flex: 1,
                            marginHorizontal: DesignTokens.spaces.item,
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
        flexDirection: "column",
        backgroundColor: Colors.cardBackground,
        margin: DesignTokens.spaces.inline,
        borderRadius: DesignTokens.radiuses.half,
    },
    headerContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    profilePhotoStyle: {
        height: 50,
        width: 50,
        borderRadius: DesignTokens.radiuses.full,
        margin: DesignTokens.spaces.inline,
    },
    gridCarouselContainer: {
        margin: DesignTokens.spaces.inline,
    },
    gridPaginationContainer: {
        position: "absolute",
        alignSelf: "center",
        bottom: -20,
    },
    carouselContainer: {
        marginVertical: DesignTokens.spaces.item,
        alignItems: "center",
    },
    paginationContainer: {
        position: "absolute",
        alignSelf: "center",
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
        flexDirection: "column",
    },
    detailContainer: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "pink",
    },
    descriptionContainer: {
        flex: 4,
        flexDirection: "row",
        backgroundColor: "red",
    },
    descriptionLabel: {
        flex: 1,
        alignSelf: "auto",
        marginTop: DesignTokens.spaces.inline,
        marginLeft: DesignTokens.spaces.inline,
    },
});

export default ImageItem;
