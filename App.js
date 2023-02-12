import { StatusBar } from 'expo-status-bar';
import { Image , StyleSheet, Text, View } from 'react-native';
import FirstPage from './Pages/FirstPage';
import SecondPage from './Pages/SecondPage';
import Splash from './Pages/Splash';
import Fifth from './Pages/Fifth';
import FourthPage from './Pages/Fourth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sixth from './Pages/Sixth';
const Stack = createNativeStackNavigator();



  // <SecondPage/>
    // <FirstPage/>
    // <Splash/>
    // <FourthPage/>
    // <Fifth/>




export default function App() {
  return ( 
    <NavigationContainer>
    <Stack.Navigator   initialRouteName='Home'>
      <Stack.Screen name="Home" component={Splash} />
      <Stack.Screen name="Signup" component={FirstPage}/>
      <Stack.Screen name="Login" component={SecondPage}/>
      <Stack.Screen name="FourthPage" component={FourthPage} />
      <Stack.Screen name="FiFthPage" component={Fifth} />
      <Stack.Screen name="SixthPage" component={Sixth} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

