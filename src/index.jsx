import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Cpf from './components/Cpf/index'
import Card from './components/Card/index'
import Header from './components/Header/index'
import Footer from './components/Footer/index'

ReactDOM.render(
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path='/index.html' component={Cpf} />
            <Route path='/card' component={Card} />
        </Switch>
        <Footer />
    </BrowserRouter>,
    document.getElementById('root')
);
