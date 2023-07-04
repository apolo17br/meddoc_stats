import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChakraProvider } from '@chakra-ui/react';
import ForgotPassword from './app/pages/ForgotPassword';
import Home from './app/pages/Home';
import SignIn from './app/pages/SignIn';
import SignUp from './app/pages/SignUp';
import Welcome from './app/pages/Welcome';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ChakraProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>

        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Welcome' component={Welcome} />

      </Stack.Navigator>
    </NavigationContainer>
    </ChakraProvider>
  );
}



