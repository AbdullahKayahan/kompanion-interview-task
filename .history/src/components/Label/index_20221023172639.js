import React from "react";
import {
    StyleSheet, Text 
} from "react-native";

import {
    Colors, DesignTokens 
} from "../../helpers/theme.js";

const Label = ({
    text = "Label Text", style 
}) => {
    return <Text style={[Styles.textStyle, style]}>{text}</Text>;
};

const Styles = StyleSheet.create({
    textStyle: {
        alignSelf: "center",
        color: Colors.darkTextColor,
        fontSize: DesignTokens.fontSizes.text,
        fontWeight: DesignTokens.fontWeights.regular,
    },
});

export default Label;
