import React from "react";

import {
    TextInput,
    StyleSheet,
} from "react-native";

interface InputProps {
    placeholder: string;
    secureTextEntry?: boolean;
    multiline?: boolean;
}

const Input = ({
    placeholder,
    secureTextEntry = false,
    multiline = false,
}: InputProps) => {

    return (

        <TextInput
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            multiline={multiline}
            style={[
                styles.input,
                multiline && styles.multilineInput,
            ]}
            placeholderTextColor="#999"
        />

    );
};

const styles = StyleSheet.create({

    input: {
        width: "100%",
        minHeight: 50,
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        backgroundColor: "#FFF",
    },

    multilineInput: {
        height: 120,
        textAlignVertical: "top",
        paddingTop: 15,
    },

});

export default Input;