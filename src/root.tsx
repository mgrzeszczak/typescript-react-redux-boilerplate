import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import HelloComponent from "./components/hello";

export default class Root extends Component<{}, {}> {

    render() {
        return <div>
            <Switch>
                <Route exact path="/" component={HelloComponent} />
            </Switch>
        </div>;
    }
}

