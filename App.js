import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatComponent from "./src/components/CatComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <CatComponent nombre= "Garfield" raza= "albino" imagen= "https://reactnative.dev/docs/assets/p_cat1.png" ></CatComponent>
      <CatComponent nombre= "Garfield1" raza= "albino1" imagen= "https://reactnative.dev/docs/assets/p_cat2.png"
      ></CatComponent>
   
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
