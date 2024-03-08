import React from "react";
import { View, StyleSheet, ScrollView, Platform } from "react-native";
import Header from '../../components/Header';
import CadastrarCard from '../../components/Cadastrar';
import BottomBar from '../../components/bottombar';
import Card from '../../components/Card';
import { StatusBar } from "expo-status-bar";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.top}>
        <CadastrarCard />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.cards}>
          <Card title="Extintores" onPressVerMais={() => console.log("Ver mais Extintores")} />
          <Card title="Hidrantes" onPressVerMais={() => console.log("Ver mais Hidrantes")} />
          <Card title="Cozinha" onPressVerMais={() => console.log("Ver mais Cozinha")} />
          <Card title="Vigilância Sanitária" onPressVerMais={() => console.log("Ver mais Vigilância Sanitária")} />
          {/* Espaço vazio adicional */}
          <View style={{ height: Platform.OS === 'ios' ? 100 : 150 }} />
        </View>
      </ScrollView>
      <StatusBar style="light" barStyle="light-content" />
      <BottomBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  top: {
    marginTop: -50,
  },
  cards: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});
