import React, {
    useReducer, useEffect, useState 
} from "react";
import {
    StyleSheet 
} from "react-native";

import {
    NavigationContainer 
} from "@react-navigation/native";
import {
    createStackNavigator 
} from "@react-navigation/stack";

import LoginPage from "./screens/Login/index";
import HomePage from "./screens/Home/index";

import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    Loading 
} from "./components/index";

import MainContext from "./context/index.js";

const Stack = createStackNavigator();

const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem("user_token").then((token) => {
            console.warn(token);
            setUserToken(token);
            setIsLoading(false);
        });
    }, []);

    useEffect(
        (token) => {
            AsyncStorage.setItem("user_token", token);
        },
        [userToken]
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <MainContext.Provider
            value={{
                login: (token) => setUserToken(token),
                logout: () => setUserToken(null),
            }}
        >
            <NavigationContainer>
                {userToken ? (
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={HomePage}
                            initialParams={{
                                token: userToken,
                            }}
                        />
                    </Stack.Navigator>
                ) : (
                    <Stack.Navigator initialRouteName="Login" headerMode="none">
                        <Stack.Screen name="Login" component={LoginPage} />
                    </Stack.Navigator>
                )}
            </NavigationContainer>
        </MainContext.Provider>
    );
};

const Styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flexDirection: "row",
        backgroundColor: "red",
    },
});

export default App;
