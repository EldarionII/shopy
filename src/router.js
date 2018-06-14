import React from 'react'
import {BrowserRouter, Switch, Route, Link, Redirect} from 'react-router-dom'
import {MainPage} from './components/main-page/main-page'

export class Router extends React.Component
{
    render()
    {
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"} component={MainPage}/>
                    <Redirect path={"/home"} to={'/'}/>
                </Switch>
            </BrowserRouter>)
    }
}