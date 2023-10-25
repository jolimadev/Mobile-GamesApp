import React from 'react'
import { View, Text, Button } from 'react-native';



const Game3Screen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Game 3</Text>
            <Text>COMING SOON #RD GAME</Text>
            <Button title="Back to Game's List" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default Game3Screen