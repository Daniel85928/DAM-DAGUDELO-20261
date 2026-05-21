import React from "react";

import {
    useNavigation,
} from "@react-navigation/native";

import {
    AuthTemplate,
} from "../../Components/Templates";

import {
    LoginForm,
} from "../../Components/Organims";

const LoginPage = () => {

    const navigation = useNavigation<any>();

    const handleLogin = () => {
        navigation.navigate("Dashboard");
    };

    const goToRegister = () => {
        navigation.navigate("Register");
    };

    return (
        <AuthTemplate>

            <LoginForm
                onSubmit={handleLogin}
                onRegister={goToRegister}
            />

        </AuthTemplate>
    );
};

export default LoginPage;