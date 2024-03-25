import { Text, TouchableOpacity } from "react-native";

export function Child({onPress}){
    function onPress_(){
        onPress("Jhon")
    }

    return (
        <>
            <TouchableOpacity onPress={onPress_}>
                <Text>Click me</Text>
            </TouchableOpacity>
        </>
    )
}