import { Routes as Switch, Route, Navigate, Outlet } from "react-router-dom";

import { HomeScreen, LoginScreen, UserRegisterScreen,  MedRegisterScreen, UserLoginScreen, MedLoginScreen, EmailConfirmationScreen } from "../screens";

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

        <Route element={<CustomRoute />}>
          {/* PRIVATE ROUTES */}

          <Route path="/home" element={<HomeScreen />} />
          <Route path="/confirmar-cadastro" element={<EmailConfirmationScreen />} />

        </Route>
      </Route>
    </Switch>
  );
}