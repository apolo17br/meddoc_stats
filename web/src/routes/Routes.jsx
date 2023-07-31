import { Routes as Switch, Route, Navigate, Outlet } from "react-router-dom";

import { HomeScreen, LoginScreen, UserRegisterScreen,  MedRegisterScreen, UserLoginScreen, MedLoginScreen, EmailConfirmationScreen, ForgetPasswordScreen, ForgetPasswordScreenConfirmation, CreateNewPasswordScreen, CreateNewPasswordScreenConfirmation } from "../screens";

function CustomRoute() {
  const isAthenticated = true;

  return isAthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export function Routes() {
  return (
    <Switch>
      <Route path="/">
        {/* PUBLIC ROUTES */}

        <Route path="" element={<LoginScreen />} />

        <Route path="/cadastro-paciente" element={<UserRegisterScreen />} />
        <Route path="/cadastro-medico" element={<MedRegisterScreen />} />

        <Route path="/login-paciente" element={<UserLoginScreen />} />
        <Route path="/login-medico" element={<MedLoginScreen />} />

        <Route path="/confirmar-cadastro" element={<EmailConfirmationScreen />} />
        <Route path="/recuperar-senha" element={<ForgetPasswordScreen />} />
        <Route path="/recuperar-senha-confirmacao" element={<ForgetPasswordScreenConfirmation />} />

        <Route path="/criar-nova-senha" element={<CreateNewPasswordScreen />} />
        <Route path="/criar-nova-senha-confirmacao" element={<CreateNewPasswordScreenConfirmation />} />


        <Route element={<CustomRoute />}>
          {/* PRIVATE ROUTES */}

          <Route path="/home" element={<HomeScreen />} />

        </Route>
      </Route>
    </Switch>
  );
}