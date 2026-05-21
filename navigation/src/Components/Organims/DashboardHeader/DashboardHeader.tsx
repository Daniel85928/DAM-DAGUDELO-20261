import React from "react";

import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import {
    Button,
} from "../../Atoms";

interface DashboardHeaderProps {
    onNewProduct: () => void;
}

const DashboardHeader = ({
    onNewProduct,
}: DashboardHeaderProps) => {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Welcome,
            </Text>

            <Text style={styles.subtitle}>
                Samuel
            </Text>

            <Button
                title="NEW PRODUCT"
                onSubmit={onNewProduct}
            />

        </View>

    );
};

const styles = StyleSheet.create({

    container: {
        marginBottom: 20,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
    },

    subtitle: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
    },

});

export default DashboardHeader;