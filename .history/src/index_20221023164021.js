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

const initialState = {
    isLoading: true,
    userToken: null,
};

function reducer(prevState, action) {
    switch (action.type) {
    case "TOKEN_MISSING":
        return {
            isLoading: false,
            userToken: undefined,
        };
    case "TOKEN_EXISTS":
    case "LOGIN":
        AsyncStorage.setItem("user_token", action.token);
        return {
            isLoading: false,
            userToken: action.token,
        };
    case "LOGOUT":
        AsyncStorage.removeItem("user_token");
        return {
            isLoading: false,
            userToken: undefined,
        };
    }
}

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [isLoading, setIsLoading] = useState(true);
    const [userToken, setUserToken] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem("user_token").then((token) => {
            setUserToken(token);
            setIsLoading(false);
        });
    }, []);

    if (state.isLoading) {
        return <Loading />;
    }

    return (
        <MainContext.Provider
            value={{
                login: (token) =>
                    dispatch({
                        type: "LOGIN",
                        token,
                    }),
                logout: () =>
                    dispatch({
                        type: "LOGOUT",
                    }),
            }}
        >
            <NavigationContainer>
                {state.userToken ? (
                    <Stack.Navigator initialRouteName="Home">
                        <Stack.Screen
                            name="Home"
                            component={HomePage}
                            initialParams={{
                                token: state.userToken,
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
