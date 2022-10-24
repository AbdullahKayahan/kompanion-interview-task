import {
    Platform 
} from "react-native";
import {
    getStatusBarHeight 
} from "react-native-status-bar-height";
export const Colors = {
    primaryColor: "#230871",
    secondaryColor: "#FF664C",
    tertiaryColor: "#feaebb",
    thinTextColor: "#666666",
    disabledColor: "#CDCDCD",
    darkTextColor: "#000000",
    lightTextColor: "#FFFFFF",
    headerBackground: "#FAFAFA",
    cardBackground: "#FAFAFA",
};

export const DesignTokens = {
    spaces: {
        container: 20,
        content: 8,
        inline: 5,
        item: 10,
    },
    borders: {
        indicator: 2,
        line: 1,
    },
    radiuses: {
        quarter: 5,
        full: 70,
        half: 10,
        none: 0,
    },
    disabled: {
        opacity: 0.33,
    },
    fontWeights: {
        thin: "100",
        extraLight: "200",
        light: "300",
        regular: "400",
        medium: "500",
        semiBold: "600",
        bold: "700",
        extraBold: "800",
        black: "900",
    },
    fontSizes: {
        title: 10,
        subtitle: 12,
        text: 14,
        header: 16,
        pageMessage: 30,
    },
    widths: {
        large: "90%",
        medium: "80%",
        small: "60%",
        iconButton: 40,
        textIconButton: 30,
    },
    heights: {
        statusbar: getStatusBarHeight(),
        header: (Platform.OS === "ios" ? 45 : 45) + getStatusBarHeight(),
        iconButton: 40,
        textIconButton: 30,
    },
    pagination: {
        dotWidth: 10,
        dotHeight: 10,
    },
};
