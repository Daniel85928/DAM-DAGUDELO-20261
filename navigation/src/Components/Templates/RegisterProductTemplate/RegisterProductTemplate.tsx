import React from "react";

import {
    View,
    StyleSheet,
    ScrollView,
} from "react-native";

interface RegisterProductTemplateProps {
    children: React.ReactNode;
}

const RegisterProductTemplate = ({
    children,
}: RegisterProductTemplateProps) => {

    return (

        <ScrollView contentContainerStyle={styles.container}>
            {children}
        </ScrollView>

    );
};

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        padding: 25,
        justifyContent: "center",
        backgroundColor: "#FFF",
    },

});

export default RegisterProductTemplate;