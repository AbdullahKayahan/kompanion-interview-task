import React, {
    useEffect, useState 
} from "react";

import {
    NavigationContainer 
} from "@react-navigation/native";

import {
    createStackNavigator 
} from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

import LoginPage from "./screens/Login/index";
import HomePage from "./screens/Home/index";
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
            setUserToken(token);
            setIsLoading(false);
        });
    }, []);

    useEffect(() => {
        if (userToken) AsyncStorage.setItem("user_token", userToken);
        else AsyncStorage.removeItem("user_token");
    }, [userToken]);

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

export default App;
