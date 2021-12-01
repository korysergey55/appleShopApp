import React, { Suspense } from "react";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import { useSelector } from "react-redux";
import { authTokenSelector } from "../../redux/auth/authSelectors";
import { ToastContainer } from 'react-toastify'

import PrivateRoute from "../../routes/PrivateRoute";
import PublicRoute from "../../routes/PublicRoute";
import Loader from "../../containers/Loader/Loader";


const App = () => {
  const token = useSelector(authTokenSelector);

  return (
    <div className='appContainer'>
      <Suspense fallback={<Loader/>}>
        <Switch>
          {mainRoutes.map((route) =>
            route.isPrivate ? (
              <PrivateRoute
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={route.path}
                token={token}
              />
            ) : (
              <PublicRoute
                path={route.path}
                exact={route.exact}
                isRestricted={route.isRestricted}
                component={route.component}
                key={route.path}
                token={token}
              />
            )
          )}
        </Switch>
        <ToastContainer />
      </Suspense>
    </div>
  );
};

export default App;
