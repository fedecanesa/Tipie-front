import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
    Home,
    Login,
    NotMatch
} from '../pages';
import { UserProvider } from "../context/UserContext";

const App = () => {
    return (
        <UserProvider>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/inicio" component={Home} />
                    <Route path="*" component={NotMatch} />
                </Switch>
            </BrowserRouter>
        </UserProvider>
    )
}

export default App;
