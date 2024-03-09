import React from "react";
import { View, StyleSheet, Text, StatusBar, TouchableOpacity, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';

const statusBarH = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 200;

export default function Header() {
    return (
        <View style={styles.container}>

            <View style={styles.center}>
                <View style={styles.display}>
                    <View >
                        <Text style={styles.title}>Localização</Text>
                        <Text style={styles.subtitle}>Shopping Flamboyant</Text>
                    </View>

                </View>

                <View style={styles.searchContainer}>
                    <MaterialIcons name="search" size={24} color="#000" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Pesquisar..."
                        placeholderTextColor="#888"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#131313",
        paddingTop: statusBarH,
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        padding: 60,
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginTop: 10,
    },
    searchInput: {
        flex: 1,
        padding: 10,
        fontSize: 16,
        color: '#000',
    },
    searchIcon: {
        padding: 5,
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subtitle: {
        color: 'white',
        fontSize: 14,
    },
    display: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    center: {
        marginTop: -100,
    }

});
