import React from "react";

import {
    View,
    Text,
    StyleSheet,
} from "react-native";

import { Button } from "../../Atoms";

interface ProductCardProps {
    nombre: string;
    sku: string;
    stock: number;
    ganancia: number;
}

const ProductCard = ({
    nombre,
    sku,
    stock,
    ganancia,
}: ProductCardProps) => {

    return (

        <View style={styles.card}>

            <View>

                <Text style={styles.name}>
                    {nombre}
                </Text>

                <Text>
                    SKU {sku}
                </Text>

                <Text>
                    Stock: {stock}
                </Text>

                <Text>
                    Ganancia: ${ganancia}
                </Text>

            </View>

            <View style={styles.buttonContainer}>

                <Button
                    title="VENDER"
                    onSubmit={() => {}}
                />

            </View>

        </View>

    );
};

const styles = StyleSheet.create({

    card: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#CCC",
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FFF",
    },

    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },

    buttonContainer: {
        width: 110,
    },

});

export default ProductCard;