import { Text,View, Image } from "react-native";
import { User } from "./components/User";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {s} from "./App.style"
import { FlexDemo } from "./components/FlexDemo/FlexDemo";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{backgroundColor:"red", flex:1}}>
        <User
          firstName={"Paul"}
          lastName={"Doe"}
          age={40}
          adress={{street: "8B rue jean wyrch", city:"Besançon"}}
          isVerified={true}
          doSomething={function (){
            console.log("User authenticated")
          }}
        >
          <Image
              style={{height: 200, with:300}}
              source={{uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
          />
        </User>
      </SafeAreaView>
    </SafeAreaProvider>
    
  );
}

