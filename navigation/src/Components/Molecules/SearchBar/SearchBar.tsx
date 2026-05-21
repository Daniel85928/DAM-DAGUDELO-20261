import React from "react";

import {
    View,
    StyleSheet,
} from "react-native";

import {
    Input,
} from "../../Atoms";

const SearchBar = () => {

    return (

        <View style={styles.container}>

            <Input placeholder="Search products..." />

        </View>

    );
};

const styles = StyleSheet.create({

    container: {
        marginBottom: 20,
    },

});

export default SearchBar;