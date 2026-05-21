import React from "react";
import {
    Text,
    Pressable,
    StyleSheet,
} from "react-native";

interface LinkTextProps {
    title: string;
    onPress: () => void;
}

const LinkText = ({
    title,
    onPress,
}: LinkTextProps) => {
    return (
        <Pressable onPress={onPress}>
            <Text style={styles.link}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    link: {
        color: "#007BFF",
        textAlign: "center",
        marginVertical: 10,
        fontSize: 14,
    },
});

export default LinkText;