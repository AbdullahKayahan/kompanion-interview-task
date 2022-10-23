import React from 'react';
import {
    TouchableOpacity, StyleSheet, Text
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

import {
    Colors, DesignTokens
} from '../theme.js';

const IconButton = ({
    icon = 'home',
    size = 24,
    color = Colors.primaryColor,
    text,
    textDirection = 'row',
    disabled,
    onPress,
    textStyle,
    style,
}) => {
    return (
        <TouchableOpacity
            disabled={disabled}
            style={[
                Styles.container,
                style,
                {
                    opacity: disabled ? DesignTokens.disabled.opacity : 1,
                    flexDirection: textDirection,
                },
            ]}
            onPress={onPress}>
            <FontAwesome name={icon} size={size} color={color} />
            {text ? (
                <Text style={[Styles.textStyle, textStyle]}>{text}</Text>
            ) : null}
        </TouchableOpacity>
    );
};

const Styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: DesignTokens.heights.iconButton,
        width: DesignTokens.widths.iconButton,
        borderRadius: DesignTokens.radiuses.quarter,
    },
    textStyle: {
        margin: DesignTokens.spaces.inline,
        fontSize: DesignTokens.fontSizes.title,
        fontWeight: DesignTokens.fontWeights.bold,
    },
});

export default IconButton;
