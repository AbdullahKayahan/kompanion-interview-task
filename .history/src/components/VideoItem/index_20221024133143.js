import React, {
    useState, useEffect 
} from "react";
import {
    Dimensions,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import Video from "react-native-video";
import {
    LikeCountString, ScreenWidth, GRID_WIDTH 
} from "../../helpers";
import {
    Label, IconButton 
} from "../index";
import {
    Colors, DesignTokens 
} from "../../theme/theme.js";

const VideoItem = ({
    video,
    isLiked,
    likes,
    userName,
    profilePhoto,
    description,
    isPaused,
    onItemPress,
    isGridItem,
    title,
    style,
}) => {
    const [_isLiked, setIsLiked] = useState(isLiked);
    const [likeCount, setLikeCount] = useState(likes);
    const [isLikeButtonPress, setIsLikeButtonPress] = useState(false);

    useEffect(() => {
        if (isLikeButtonPress) {
            setLikeCount(parseInt(_isLiked ? likeCount + 1 : likeCount - 1));
            setIsLikeButtonPress(false);
        }
    }, [isLikeButtonPress, _isLiked]);
    if (isGridItem) {
        return (
            <View style={Styles.gridVideoContainer}>
                <TouchableOpacity onPress={onItemPress}>
                    <Video
                        style={{
                            width: GRID_WIDTH,
                            height: GRID_WIDTH,
                            borderRadius: DesignTokens.radiuses.half,
                        }}
                        resizeMode="stretch"
                        source={video}
                        paused={isPaused}
                        repeat={true}
                    />
                </TouchableOpacity>
            </View>
        );
    }
    return (
        <View style={Styles.container}>
            <View style={Styles.headerContainer}>
                <Image source={profilePhoto} style={Styles.profilePhotoStyle} />
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
            <View style={Styles.videoContainer}>
                <TouchableOpacity onPress={onItemPress}>
                    <Video
                        style={{
                            width: ScreenWidth,
                            height: ScreenWidth,
                            borderRadius: DesignTokens.radiuses.half,
                        }}
                        resizeMode="stretch"
                        source={video}
                        paused={isPaused}
                        repeat={true}
                    />
                </TouchableOpacity>
            </View>
            <View style={Styles.bottomContainer}>
                <View style={Styles.detailContainer}>
                    <IconButton
                        text={LikeCountString(parseFloat(likeCount))}
                        icon={_isLiked ? "heart" : "heart-o"}
                        color={Colors.secondaryColor}
                        style={{
                            backgroundColor: Colors.cardBackground,
                            margin: DesignTokens.spaces.item,
                        }}
                        onPress={() => {
                            setIsLiked(!_isLiked);
                            setIsLikeButtonPress(true);
                        }}
                    />
                    <Label
                        text={title}
                        style={{
                            fontWeight: DesignTokens.fontWeights.bold,
                            fontSize: DesignTokens.fontSizes.title,
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
    gridVideoContainer: {
        flex: 1,
        margin: DesignTokens.spaces.inline,
    },
    videoContainer: {
        flex: 9,
        marginVertical: DesignTokens.spaces.item,
        alignItems: "center",
    },
    bottomContainer: {
        flex: 2,
        flexDirection: "column",
    },
    detailContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    descriptionContainer: {
        flex: 4,
        flexDirection: "row",
    },
    descriptionLabel: {
        flex: 1,
        alignSelf: "auto",
        marginTop: DesignTokens.spaces.inline,
        marginLeft: DesignTokens.spaces.inline,
    },
});

export default VideoItem;
