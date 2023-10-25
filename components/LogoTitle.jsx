import React from 'react'
import {Image} from 'react-native';


const LogoTitle = () => {
    return (
        <Image
          style={{ width: 50, height: 50 }}
          source={require('@expo/snack-static/react-native-logo.png')}
        />
      );
}

//si quiero customizar algun title puedo realizar lo de arriba y luego importarlo como esta abajo:
//   function StackScreen() {
//     return (
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
//         />
//       </Stack.Navigator>
//     );
//   }

export default LogoTitle