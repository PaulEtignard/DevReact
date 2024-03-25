import { Text,View, Image, TouchableOpacity } from "react-native";
import {s} from "./App.style"
import { useState } from "react";

export default function App() {
  const [movie,setMovie] = useState("star wars");
  
  function updateMovie(){
    setMovie("Forest Gump");
    console.log(movie);
  }

  console.log("render",movie);
  return (
    
    <View style={s.container}>      
      <TouchableOpacity onPress={updateMovie}>
        <Text>{movie}</Text>
      </TouchableOpacity>
    </View>
  );
}

