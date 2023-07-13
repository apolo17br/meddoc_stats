import { Routes as Switch, Route, Navigate, Outlet } from "react-router-dom";

import { HomeScreen, LoginScreen } from "../screens";

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

        <Route element={<CustomRoute />}>
          {/* PRIVATE ROUTES */}

          <Route path="/home" element={<HomeScreen />} />
        </Route>
      </Route>
    </Switch>
  );
}