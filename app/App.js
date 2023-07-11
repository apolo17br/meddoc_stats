import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChakraProvider } from '@chakra-ui/react';
import CheckEmail from './app/pages/CheckEmail';
import ForgotPassword from './app/pages/ForgotPassword';
import Home from './app/pages/Home';
import SignIn from './app/pages/SignIn';
import SignUp from './app/pages/SignUp';
import Welcome from './app/pages/Welcome';
import Menu from './app/pages/Menu';
import RedefinePassword from './app/pages/RedefinePassword';
import CreatePassword from './app/pages/CreatePassword';
import SignUpDoctor from './app/pages/SignUpDoctor';
import AllSetDoctor from './app/pages/AllSetDoctor';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ChakraProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='AllSetDoctor' options={{headerShown: false}}>

        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Menu' component={Menu} />
        <Stack.Screen name='Entrar' component={SignIn} />
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='CheckEmail' component={CheckEmail} />
        <Stack.Screen name='RedefinePassword' component={RedefinePassword} />
        <Stack.Screen name='CreatePassword' component={CreatePassword} />
        <Stack.Screen name='SignUpDoctor' component={SignUpDoctor} />
        <Stack.Screen name='AllSetDoctor' component={AllSetDoctor} />

      </Stack.Navigator>
    </NavigationContainer>
    </ChakraProvider>
  );
}



