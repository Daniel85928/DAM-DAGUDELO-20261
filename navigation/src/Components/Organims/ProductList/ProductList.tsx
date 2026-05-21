import React from "react";

import {
    View,
} from "react-native";

import ProductCard from "../../Molecules/ProductCard/ProductCard";

const products = [

    {
        id: 1,
        name: "Camisa Azul",
        sku: "CA001",
        stock: 25,
        profit: 14.80,
    },

    {
        id: 2,
        name: "Pantalón Negro",
        sku: "PN002",
        stock: 10,
        profit: 20.50,
    },

];

const ProductList = () => {

    return (

        <View>

            {
                products.map((product) => (

                    <ProductCard
                        key={product.id}
                        nombre={product.name}
                        sku={product.sku}
                        stock={product.stock}
                        ganancia={product.profit}
                    />

                ))
            }

        </View>

    );
};

export default ProductList;