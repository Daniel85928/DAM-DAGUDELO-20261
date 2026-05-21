import React, {
    useState,
} from "react";

import {
    Alert,
} from "react-native";

import {
    useNavigation,
} from "@react-navigation/native";

import {
    AuthTemplate,
} from "../../Components/Templates";

import {
    RegisterForm,
} from "../../Components/Organims";

const RegisterPage = () => {

    const navigation = useNavigation<any>();

    const [loading, setLoading] = useState(false);

    const handleRegister = async () => {

        try {

            setLoading(true);

            setTimeout(() => {

                Alert.alert(
                    "Success",
                    "User registered successfully"
                );

                navigation.navigate("Login");

                setLoading(false);

            }, 1000);

        } catch (error) {

            Alert.alert(
                "Error",
                "Error registering user"
            );

            setLoading(false);
        }
    };

    return (

        <AuthTemplate>

            <RegisterForm
                onSubmit={handleRegister}
                disabledAction={loading}
            />

        </AuthTemplate>

    );
};

export default RegisterPage;