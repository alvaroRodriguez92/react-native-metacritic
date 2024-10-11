import { View, StyleSheet } from "react-native";
import Main from "./components/Main";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function App(){
  return(
    <SafeAreaProvider>
    <View style={styles.container}>
      <StatusBar style="dark" />
    </View>
    </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal:12
  }
})