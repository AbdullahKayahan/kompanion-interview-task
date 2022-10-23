import React, {
    useState 
} from "react";
import {
    StyleSheet, View 
} from "react-native";
import {
    IconButton, Label, NavigationTextInput 
} from "../index";
import MainContext from "../../context/index";
import {
    Colors, DesignTokens 
} from "../theme";

const NavigationHeader = ({
    navigation,
    onChangeText,
    rightButtonPress,
    leftButtonPress,
    isSearch,
}) => {
    const [_isSearch, setIsSearch] = useState(isSearch);
    const [serachValue, setSeacthValue] = useState(null);

    if (_isSearch) {
        return (
            <View style={[Styles.container]}>
                <IconButton
                    icon="chevron-left"
                    color={Colors.primaryColor}
                    style={Styles.leftButtonStyle}
                    onPress={() => {
                        if (leftButtonPress) leftButtonPress();
                    }}
                />
                <View style={Styles.headerTitleContainer}>
                    <NavigationTextInput
                        placeholder={"Arama Metnini Giriniz"}
                        onChangeText={(_value) => {
                            if (onChangeText) onChangeText(_value);
                            setSeacthValue(_value);
                        }}
                    />
                </View>
                <IconButton
                    icon="search"
                    color={Colors.primaryColor}
                    style={Styles.rightButtonStyle}
                    onPress={() => {
                        if (rightButtonPress) rightButtonPress();
                    }}
                />
            </View>
        );
    } else {
        return (
            <View style={[Styles.container]}>
                <IconButton
                    icon="power-off"
                    color={Colors.primaryColor}
                    style={Styles.leftButtonStyle}
                    onPress={() => {
                        if (leftButtonPress) leftButtonPress();
                    }}
                />
                <View style={Styles.headerTitleContainer}>
                    <Label
                        style={{
                            fontSize: DesignTokens.fontSizes.header,
                            fontWeight: DesignTokens.fontWeights.bold,
                            color: Colors.primaryColor,
                        }}
                        text="Anasayfa"
                    />
                </View>
                <IconButton
                    icon="search"
                    color={Colors.primaryColor}
                    style={Styles.rightButtonStyle}
                    onPress={() => {
                        alert("xxx");
                        if (rightButtonPress) rightButtonPress();
                    }}
                />
            </View>
        );
    }
};

const Styles = StyleSheet.create({
    container: {
        height: DesignTokens.heights.header,
        flexDirection: "row",
        paddingLeft: DesignTokens.spaces.item,
        paddingRight: DesignTokens.spaces.item,
        paddingTop: DesignTokens.heights.statusbar,
        backgroundColor: Colors.headerBackground,
    },
    headerTitleContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginRight: DesignTokens.spaces.inline,
    },
    leftButtonStyle: {
        backgroundColor: Colors.headerBackground,
        marginRight: DesignTokens.spaces.inline,
    },
    rightButtonStyle: {
        backgroundColor: Colors.headerBackground,
        marginRight: DesignTokens.spaces.inline,
    },
});
export default NavigationHeader;
