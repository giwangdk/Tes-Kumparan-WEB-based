import React, { Suspense } from 'react';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { theme } from './utils/';
import { Routes } from './routes';
import { LoaderCatalog } from './components';
const Layout = React.lazy(() => import('./Layout'));


const App = function () {
  return (

    <ThemeProvider theme={theme}>
      <Router>
        <Suspense fallback={<LoaderCatalog/>}>
          <Switch>
            {
              Routes.map((route) => {
                const { component: Component, path, exact } = route;
                return (
                  <Route
                    key={path}
                    path={path}
                    exact={exact}
                    render={(props) => (
                      <Layout>
                        <Component {...props} />
                      </Layout>
                    )}
                  />
                );
              })
            }
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
