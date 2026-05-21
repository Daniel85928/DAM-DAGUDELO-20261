import React from "react";

import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import {
    Button,
    Input,
    LinkText,
} from "../../Atoms";

interface LoginFormProps {
    onSubmit: () => void;
    onRegister: () => void;
}

const LoginForm = ({
    onSubmit,
    onRegister,
}: LoginFormProps) => {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                LOGIN
            </Text>

            <Input placeholder="Username" />

            <Input
                placeholder="Password"
                secureTextEntry
            />

            <LinkText
                title="Forget your password?"
                onPress={() => {}}
            />

            <Button
                title="LOGIN"
                onSubmit={onSubmit}
                disabled={false}
            />

            <LinkText
                title="Create an account"
                onPress={onRegister}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },

    title: {
        fontSize: 32,
        fontWeight: "bold",
        marginBottom: 30,
        textAlign: "center",
    },
});

export default LoginForm;