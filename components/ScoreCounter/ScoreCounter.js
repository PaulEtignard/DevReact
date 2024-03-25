import { useState } from "react";
import { TouchableOpacity,Text } from "react-native";
import { ScoreDisplay } from "../ScoreDisplay/ScoreDisplay";

export function ScoreCounter(){
    const [score, setScore] = useState(0);
    function increment(){
       setScore(score + 1);
        console.log(score);
    }
    return <>
    
            <TouchableOpacity onPress={increment}>
                <Text style={{fontSize:40}}>Augmenter</Text>
            </TouchableOpacity>
            <ScoreDisplay score={score}/>
    
    
    </>
    
    
}