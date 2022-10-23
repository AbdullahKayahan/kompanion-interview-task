import React from "react";
import {
    View, ActivityIndicator, StyleSheet 
} from "react-native";
import {
    Colors 
} from "../theme";
const Loading = ({
    size = "large", color = Colors.secondaryColor 
}) => (
    <View style={styles.loadingContainer}>
        <ActivityIndicator size={size} color={color} />
    </View>
);

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
    },
});

export default Loading;
