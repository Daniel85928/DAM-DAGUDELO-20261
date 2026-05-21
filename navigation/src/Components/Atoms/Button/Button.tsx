import React from "react";
import { Pressable,Text } from "react-native";


interface ButtonProps {
    title: string;
    onSubmit: () => void;
    disabled?: boolean; 

    }



const Button = (
    {title, onSubmit, disabled = false }: ButtonProps
) => {
    return (
        <Pressable onPress={onSubmit}>

            <Text>{title}</Text>
        </Pressable>
    );
} ;

export default Button;