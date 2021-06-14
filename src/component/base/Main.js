import React, {Component} from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import Dashboard from "../stats/dashboard";
import Logout from "../common/logout";
import NotFound from "../common/notFound";
import FormsAdd from "../forms/FormsAdd";


export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path="/forms/:id" component={FormsAdd}/>
                <Route path="/logout" component={Logout}/>
                <Route path="/" exact component={Dashboard}/>
                <Route path="/not-found" component={NotFound}/>
                <Redirect to="/not-found"/>
            </Switch>
        );
    }
}
