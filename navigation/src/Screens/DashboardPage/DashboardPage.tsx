import React from "react";

import {
    Text,
    StyleSheet,
} from "react-native";

import {
    DashboardTemplate,
} from "../../Components/Templates";

import {
    useNavigation,
} from "@react-navigation/native";

import {
    SearchBar,
} from "../../Components/Molecules";

import {
    DashboardHeader,
    ProductList,
} from "../../Components/Organims";

const DashboardPage = () => {

    const navigation = useNavigation<any>();

    const goToRegisterProduct = () => {
        navigation.navigate("RegisterProduct");
    };

    return (

        <DashboardTemplate>

            <DashboardHeader
                onNewProduct={goToRegisterProduct}
            />

            <SearchBar />

            <Text style={styles.sectionTitle}>
                RECENT PRODUCTS
            </Text>

            <ProductList />

        </DashboardTemplate>

    );
};

const styles = StyleSheet.create({

    sectionTitle: {
        marginTop: 20,
        marginBottom: 15,
        fontSize: 18,
        fontWeight: "bold",
    },

});

export default DashboardPage;