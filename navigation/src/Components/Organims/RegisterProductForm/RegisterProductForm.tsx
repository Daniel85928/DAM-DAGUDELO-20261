import React from "react";

import {
    View,
} from "react-native";

import {
    Input,
    Button,
    LinkText,
} from "../../Atoms";

interface RegisterProductFormProps {
    onBack: () => void;
}

const RegisterProductForm = ({
    onBack,
}: RegisterProductFormProps) => {

    return (

        <View>

            <Input placeholder="Product name" />

            <Input placeholder="SKU" />

            <Input placeholder="Stock" />

            <Input placeholder="Purchase price" />

            <Input placeholder="Sale price" />

            <Input
                placeholder="Description"
                multiline
            />

            <Button
                title="CREATE PRODUCT"
                onSubmit={() => {}}
            />

            <LinkText
                title="Back to catalog"
                onPress={onBack}
            />

        </View>

    );
};

export default RegisterProductForm;