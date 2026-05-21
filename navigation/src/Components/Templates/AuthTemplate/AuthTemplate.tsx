import React from "react";

import {
    View,
    StyleSheet,
} from "react-native";

interface AuthTemplateProps {
    children: React.ReactNode;
}

const AuthTemplate = ({
    children,
}: AuthTemplateProps) => {

    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 25,
        backgroundColor: "#fff",
    },
});

export default AuthTemplate;