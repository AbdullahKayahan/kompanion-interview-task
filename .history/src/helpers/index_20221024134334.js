import {
    Dimensions 
} from "react-native";

export const StringValidation = (str) => typeof str === "string" && str.length;

const SUBFIX_SYMBOL = ["", "K", "M", "G", "T", "P", "E"];
// Beğeni sayısının sonuna, beğeni sayısına göre 1000 için K, 1000000 için M eklemek için kullanılır.
export const LikeCountString = (number) => {
    let tier = (Math.log10(Math.abs(number)) / 3) | 0;
    if (tier == 0) {
        return number;
    }
    var suffix = SUBFIX_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);
    var scaled = number / scale;
    return scaled.toFixed(1) + suffix;
};

export const ScreenWidth = Dimensions.get("screen").width - 30;
export const MIN_GRID_ITEM_WIDTH = 200;
export const ROW_COUNT = Math.round(ScreenWidth / MIN_GRID_ITEM_WIDTH);
export const GRID_WIDTH = Math.round(ScreenWidth / ROW_COUNT);
