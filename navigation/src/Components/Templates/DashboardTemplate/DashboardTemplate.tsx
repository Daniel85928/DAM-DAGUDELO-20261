import React from "react";

import {
    View,
    StyleSheet,
    ScrollView,
} from "react-native";

interface DashboardTemplateProps {
    children: React.ReactNode;
}

const DashboardTemplate = ({
    children,
}: DashboardTemplateProps) => {

    return (

        <ScrollView contentContainerStyle={styles.container}>
            {children}
        </ScrollView>

    );
};

const styles = StyleSheet.create({

    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: "#F5F5F5",
    },

});

export default DashboardTemplate;