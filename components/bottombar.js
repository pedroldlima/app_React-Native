import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const screenHeight = Dimensions.get('window').height;

export default function BottomBar({ navigation }) {
    return (
        <View style={styles.bottomBar}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
                <MaterialCommunityIcons name="home" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Favorites')} style={styles.iconContainer}>
                <MaterialCommunityIcons name="heart" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Wallet')} style={styles.iconContainer}>
                <MaterialCommunityIcons name="bag-personal-outline" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Firefighters')} style={styles.iconContainer}>
                <MaterialCommunityIcons name="fire-truck" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 600,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#DE3333',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingBottom: 10,
        paddingHorizontal: 20,
        height: 70,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30, 
    },
    iconContainer: {
        alignItems: 'center',
    },
});
