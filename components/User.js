import { Text,Image } from "react-native";

export function User({firstName, lastName, age, adress, isVerified, doSomething, children}) {
    doSomething()
    return <>
        
        {children}
        <Text>
            Mon nom est {firstName} {lastName}, j'ai {age} ans.
            Mon age est {age} ans. {"\n"}
            {isVerified ? "Mon compte est vérifié" : "Mon compte n'est pas vérifié"} {"\n"}
        </Text>
        <Text>
            Mon adresse est {adress.street}, {adress.city}
        </Text>
    </>
}
