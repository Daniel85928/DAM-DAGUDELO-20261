import React from "react";

import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import {
    Input,
    Button,
} from "../../Atoms";

interface RegisterFormProps {
    onSubmit: () => void;
    disabledAction: boolean;
}

const RegisterForm = ({
    onSubmit,
}: RegisterFormProps) => {

    return (
        <View style={styles.container}>

            <Text style={styles.title}>
                REGISTER
            </Text>

            <Input placeholder="Email" />

            <Input placeholder="Birth year" />

            <Input
                placeholder="Password"
                secureTextEntry
            />

            <Input
                placeholder="Confirm password"
                secureTextEntry
            />

            <Button
                title="CREATE ACCOUNT"
                onSubmit={onSubmit}
                disabled={false}
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

export default RegisterForm;