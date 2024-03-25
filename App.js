import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Platform, Text } from "react-native";

export default function App() {
  return (<SafeAreaProvider>
    <SafeAreaView style={{flex:1}}>
      {Platform.OS === "ios" ? (
        <Text>Hello sur ios</Text>
      ) : (
        <Text>Hello sur android</Text>
      )}
      </SafeAreaView>
  </SafeAreaProvider>)

}

