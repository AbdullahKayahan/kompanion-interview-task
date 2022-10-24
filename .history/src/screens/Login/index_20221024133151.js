import React, {
    useState, useContext, useEffect 
} from "react";
import {
    StyleSheet, Image, View, Text 
} from "react-native";
import {
    Button, TextInput, Loading 
} from "../../components/index.js";
import {
    DesignTokens 
} from "../../theme/index.js";
import MainContext from "../../context/index.js";
import {
    StringValidation 
} from "../../helpers/index.js";
import {
    loginOperation 
} from "../../mockApi/index";
const LoginPage = ({
    navigation 
}) => {
    const {
        login 
    } = useContext(MainContext);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    //Butonu aktif etmek için iki input da veri olmalı
    useEffect(() => {
        setButtonDisabled(
            !StringValidation(userName) || !StringValidation(password)
        );
    }, [userName, password]);

    const onLoginButtonPress = () => {
        setIsLoading(true);
        loginOperation({
            userName: userName,
            password: password,
        })
            .then((token) => {
                login(token);
            })
            .catch(() => {
                setIsLoading(false);
            });
    };

    if (isLoading) {
        return <Loading />;
    }
    return (
        <View style={Styles.mainView}>
            <Image
                source={require("../../assets/logo.png")}
                style={Styles.image}
            />
            <TextInput
                title={"Kullanıcı Adı"}
                placeholder={"Kullanıcı Adı Giriniz"}
                onChangeText={setUserName}
            />
            <TextInput
                title={"Şifre"}
                placeholder={"Şifrenizi Giriniz"}
                secureTextEntry={true}
                onChangeText={setPassword}
            />
            <Button
                text={"Giriş Yap"}
                disabled={buttonDisabled}
                onPress={onLoginButtonPress}
            />
        </View>
    );
};

const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        borderRadius: DesignTokens.radiuses.half,
        marginBottom: DesignTokens.spaces.container,
    },
});

export default LoginPage;
