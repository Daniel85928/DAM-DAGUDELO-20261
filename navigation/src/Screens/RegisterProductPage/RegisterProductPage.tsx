import React from "react";

import {
    Text,
    StyleSheet,
} from "react-native";

import {
    useNavigation,
} from "@react-navigation/native";

import {
    RegisterProductTemplate,
} from "../../Components/Templates";

import {
    RegisterProductForm,
} from "../../Components/Organims";

const RegisterProductPage = () => {

    const navigation = useNavigation<any>();

    const goBack = () => {
        navigation.navigate("Dashboard");
    };

    return (

        <RegisterProductTemplate>

            <Text style={styles.title}>
                REGISTER PRODUCT
            </Text>

            <RegisterProductForm
                onBack={goBack}
            />

        </RegisterProductTemplate>

    );
};

const styles = StyleSheet.create({

    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
    },

});

export default RegisterProductPage;