import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

export default function CadastrarCard({ onPress }) {
    return (
        <View style={styles.display}>
            <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.8}>
                <MaterialIcons name="add" size={24} color="white" style={styles.icon} />
                <Text style={styles.title}>Cadastrar Extintor</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.8}>
                <MaterialIcons name="description" size={24} color="white" style={styles.icon} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#DE3333",
        borderRadius: 8,
        padding: 20,
        margin: 10,
        elevation: 5,
        flexDirection: 'row',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        marginLeft: 10,
    },
    icon: {
        marginRight: 10,
    },
    display: {
        flexDirection: 'row',
    }
});
