import React from "react";
import propTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";
import Auth from "components/Auth";
import Footer from "components/Footer";
import Navigation from "components/Navigation"
const App = props => [
  //Nav,
  props.isLoggedIn ? <Navigation key={1} /> : null ,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: propTypes.bool.isRequired
};

const PrivateRoutes = props => (
  <Switch>
    <Route key="1" exact path="/" render={() => "feed"} />,
    <Route key="2" path="explore" render={() => "explore"} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />,
    <Route path="/recover" render={() => "recover password"} />
  </Switch>
);

export default App;