import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Card({ title, onPressVerMais }) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            {title === "Extintores" && <MaterialCommunityIcons name="fire-extinguisher" size={24} color="black" />}
            {title === "Hidrantes" && <MaterialCommunityIcons  size={24} color="black" />}
            {title === "Cozinha" && <MaterialCommunityIcons name="stove" size={24} color="black" />}
            {title === "Vigilância Sanitária" && <MaterialCommunityIcons name="hospital-marker" size={24} color="black" />}
            <TouchableOpacity onPress={onPressVerMais} style={styles.verMaisButton}>
                <Text style={styles.verMaisText}>Ver mais</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    verMaisButton: {
        backgroundColor: '#DE3333',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    verMaisText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
