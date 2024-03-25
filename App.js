import { Text,View } from "react-native";
import { User } from "./components/User";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {s} from "./App.style"
import { FlexDemo } from "./components/FlexDemo/FlexDemo";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor:"red", flex:1}}>
        <FlexDemo/>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

