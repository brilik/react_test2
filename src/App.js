import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import HeaderDashboard from "./components/dashboard/HeaderDashboard";
import AsideDashboard from "./components/dashboard/AsideDashboard";
import NonFound from "./components/404";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import CssGrid from "./components/test/CssGrid";
import Dashboard from "./components/dashboard/pages/Dashboard";
import Lists from "./components/pages/Lists";
import TemplateVersion from "./components/parts/TemplateVersion";
import './assets/css/custom.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                    </Route>
                    {/* todo is CSS-GRID */}
                    <Route exact path="/css-grid">
                        <Header/>
                        <CssGrid/>
                    </Route>
                    {/* todo is LISTS */}
                    <Route exact path="/lists">
                        <Header/>
                        <Lists/>
                    </Route>
                    {/* todo is DASHBOARD */}
                    <Route exact path="/dashboard">
                        <HeaderDashboard/>
                        <AsideDashboard/>
                        <div className="container">
                            <div className="row">
                                <Dashboard/>
                            </div>
                        </div>
                        <TemplateVersion/>
                    </Route>
                    {/* todo is DASHBOARD ALL PAGE */}
                    <Route exact path="/dashboard/*">
                        <HeaderDashboard/>
                        <AsideDashboard/>
                        <div className="container-fluid">
                            <div className="row">
                                <Dashboard/>
                            </div>
                        </div>
                        <TemplateVersion/>
                    </Route>
                    {/* todo is NOT FOUND */}
                    <Route exact to="*">
                        <Header/>
                        <NonFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;