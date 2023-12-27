// Router.js
import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect, BrowserRouter as Router, RouteProps } from "react-router-dom";
import { AuthProvider, useAuth } from "../components/AuthContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Styles } from "../styles/styles";

// Lazy-loaded components
const LazyDashboard = lazy(() => import("../pages/dashboard/index"));
const LazyLogin = lazy(() => import("../pages/login/login"));
const LazyHome = lazy(() => import("../pages/Home/index"));

interface PrivateRouteProps extends RouteProps {
  component: React.ComponentType<any>; // Explicitly typing the component type
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const RouterComponent: React.FC = () => {
  return (
      <Router>

        <Styles/>
        <Suspense fallback={null}>
          {/* <Header /> */}
          <Switch>
          <Route path="/" exact component={LazyHome} />


          <AuthProvider>

            <Route path="/login" exact component={LazyLogin} />
            <PrivateRoute path="/dashboard" exact component={LazyDashboard} />
            </AuthProvider>

          </Switch>
          {/* <Footer /> */}
        </Suspense>
      </Router>
  );
};

export default RouterComponent;
