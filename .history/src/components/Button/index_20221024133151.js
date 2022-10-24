import React, {
    useState 
} from "react";
import {
    TouchableOpacity, StyleSheet, Text 
} from "react-native";

import {
    Colors, DesignTokens 
} from "../../theme/index.js";

const Button = ({
    text, disabled, onPress, style, textStyle 
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            onPress={onPress}
            style={[
                Styles.container,
                style,
                {
                    opacity: disabled ? DesignTokens.disabled.opacity : 1,
                },
            ]}
        >
            <Text style={[Styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};
const Styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: DesignTokens.widths.medium,
        borderRadius: DesignTokens.radiuses.half,
        paddingVertical: DesignTokens.spaces.container,
        backgroundColor: Colors.primaryColor,
        marginBottom: DesignTokens.spaces.item,
    },
    text: {
        textAlign: "center",
        color: Colors.lightTextColor,
        fontWeight: DesignTokens.fontWeights.semiBold,
    },
});
export default Button;
