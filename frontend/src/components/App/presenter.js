import React from "react";
import PropTypes from "prop-types";
import { Route, Switch } from "react-router-dom";
import "./styles.scss";
import Footer from "components/Footer";
import Auth from "components/Auth"

const App = props => [
    //Nav,
    //Routers,
    props.isLoggedIn ? <PrivateRoutes key={2}/> : <PublicRoutes key={2}/>,
    <Footer key={3} />
]

App.PropTypes = {
    isLoggedIn : PropTypes.bool.isRequired
}


const PrivateRoutes = props => (
    <Switch>
        <Route key="1" exact path="/" render={()=>"feed"}/>
        <Route key="2" exact path="/explore" render={()=>"explore"}/>
    </Switch>
);

const PublicRoutes = props => (
    <Switch>
        <Route key="1" exact path="/" component={Auth}/>
        <Route key="2" exact path="/recover" render={()=>"recover password"}/>
    </Switch>
);
export default App;