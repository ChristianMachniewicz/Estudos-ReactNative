import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Cesta from "./src/telas/Cesta";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
export default function App() {
const [fontLoaded] = useFonts({
  "MontserratRegular":Montserrat_400Regular,
  "MontserratBold":Montserrat_700Bold
})
if(!fontLoaded){
  return <View />
}

  return (
    <SafeAreaView>
      <StatusBar />

      <Cesta />
    </SafeAreaView>
  );
}
