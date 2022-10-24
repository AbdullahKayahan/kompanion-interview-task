import React, {
    useState, useEffect 
} from "react";
import {
    TextInput as NativeTextInput, StyleSheet, View 
} from "react-native";
import {
    Colors, DesignTokens 
} from "../../theme/index.js";
import {
    IconButton 
} from "../index";
import {
    StringValidation 
} from "../../helpers/index.js";
const NavigationTextInput = ({
    value, style, onChangeText, ...props 
}) => {
    const [_value, setValue] = useState(value);
    const [isClearButtonShow, setIsClearButton] = useState(false);

    useEffect(() => {
        setIsClearButton(StringValidation(_value));
    }, [_value]);

    const renderIconButton = () => {
        if (isClearButtonShow) {
            return (
                <IconButton
                    style={Styles.textIconButton}
                    color={Colors.disabledColor}
                    size={20}
                    icon="times-circle"
                    onPress={() => {
                        setValue("");
                        onChangeText("");
                    }}
                />
            );
        }
    };

    return (
        <View style={[Styles.container, style]}>
            <NativeTextInput
                style={[
                    Styles.textInput,
                    {
                        color: Colors.primaryColor,
                    },
                ]}
                placeholder={"Bir Metin Girin"}
                {...props}
                value={_value}
                onChangeText={(e) => {
                    setValue(e);
                    onChangeText(e);
                }}
            />
            {renderIconButton()}
        </View>
    );
};

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: DesignTokens.borders.line,
        alignItems: "center",
        marginBottom: DesignTokens.spaces.item,
        marginRight: DesignTokens.spaces.inline,
        borderBottomColor: Colors.primaryColor,
    },
    textInput: {
        flex: 10,
        alignSelf: "stretch",
        fontSize: DesignTokens.fontSizes.text,
        marginRight: DesignTokens.spaces.inline,
    },
    textIconButton: {
        backgroundColor: Colors.headerBackground,
        height: DesignTokens.heights.textIconButton,
        width: DesignTokens.widths.textIconButton,
        borderRadius: DesignTokens.radiuses.none,
    },
});

export default NavigationTextInput;
