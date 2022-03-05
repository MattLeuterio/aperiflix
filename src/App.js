import './ui/scss/app.scss';
import './ui/scss/bootstrap/bootstrap-grid.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import 'react-datetime/css/react-datetime.css';

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import {
  Router, Route, Switch, Redirect
} from 'react-router-dom';
import { connect } from 'react-redux';

import theme from './ui/theme';
import { history } from './redux/store';

import { GlobalLayout, Loader, Toast } from './components';
import routes from './routes';

/* Pages */
import {
  Home
} from './pages';
import ModalsPortal from './components/Modals/ModalsPortal';
import ErrorModal from './components/Modals/ErrorModal';
import { GET_AVAILABLE_PLATFORM, GET_LABELS, GET_PUBLISHERS } from './redux/actions';
import { getContent } from './contentful';
import { SET_PRODUCTS } from './redux/actions/product';

const App = ({
  setProducts
}) => {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    getContent('movie', setListProducts);
  }, []);

  useEffect(() => {
    setProducts(listProducts);
  }, [listProducts])
    console.log(listProducts);
  return (
    <ThemeProvider theme={theme}>a
      <Router history={history}>
        <Loader />
          <GlobalLayout>
              <Switch>
                <>
                  {/* <Route
                    path={`${routes.videoSettings.path}/:platform/:videoId`}
                    exact
                    render={({
                      match: {
                        params: { videoId, platform }
                      }
                    }) => <VideoSettings videoId={videoId} platform={platform} />}
                  /> */}
                  <Route
                    path={routes.home.path}
                    render={() => <Home />}
                  />
                  <Redirect to={routes.home.path} />
                </>
              </Switch>
          </GlobalLayout>
      </Router>
      <Toast />
      <ModalsPortal.Target />
      <ErrorModal />
    </ThemeProvider>
  );
};

App.propTypes = {
  // HOC (connect, state)
  isLogged: PropTypes.bool.isRequired,
  getPublishers: PropTypes.func
};

export default connect(
  state => {

    return {

    };
  },
  dispatch => ({
    setProducts: (products) => dispatch({ type: SET_PRODUCTS, products }),
  })
)(App);
