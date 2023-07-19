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
import SignInDoctor from './app/pages/SignInDoctor';
import MenuDoctor from './app/pages/MenuDoctor';
import AboutDoctor from './app/pages/AboutDoctor';
import PaymentsDoctor from './app/pages/PaymentsDoctor';
import FollowUpDoctor from './app/pages/FollowUpDoctor';
import NoFollowUpDoctor from './app/pages/NoFollowUpDoctor';
import AboutPatient from './app/pages/AboutPatient';
import Payments from './app/pages/Payments';
import OnDutyAdult from './app/pages/OnDutyAdult';
import OnDutyChild from './app/pages/OnDutyChild';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ChakraProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Menu' screenOptions={{headerShown: false}}>

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
        <Stack.Screen name='SignInDoctor' component={SignInDoctor} />
        <Stack.Screen name='MenuDoctor' component={MenuDoctor} />
        <Stack.Screen name='AboutDoctor' component={AboutDoctor} />
        <Stack.Screen name='PaymentsDoctor' component={PaymentsDoctor} />
        <Stack.Screen name='FollowUpDoctor' component={FollowUpDoctor} />
        <Stack.Screen name='NoFollowUpDoctor' component={NoFollowUpDoctor} />
        <Stack.Screen name='AboutPatient' component={AboutPatient} />
        <Stack.Screen name='Payments' component={Payments} />
        <Stack.Screen name='OnDutyAdult' component={OnDutyAdult} />
        <Stack.Screen name='OnDutyChild' component={OnDutyChild} />

      </Stack.Navigator>
    </NavigationContainer>
    </ChakraProvider>
  );
}



