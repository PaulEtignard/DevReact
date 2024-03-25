import { Text } from "react-native";

export function ScoreDisplay({score}) {
    return <Text style={{fontSize: 40}}>Score: {score}</Text>;
}
