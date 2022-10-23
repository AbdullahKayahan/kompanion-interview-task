import React from "react";
import {
    View, ActivityIndicator, StyleSheet 
} from "react-native";
import {
    Colors 
} from "../theme";
const Loading = () => (
    <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={Colors.secondaryColor} />
    </View>
);

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
    },
});

export default Loading;
