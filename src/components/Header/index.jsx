import React, { Component } from 'react';
import { Link } from 'react-router-dom'

// import { Container } from './styles';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hash: ''
        }
    }

    setHash = (e) => {
        this.setState({ hash: e.target.value })
    }

    componentDidUpdate = () => {
        console.log(this.state)
    }

    render() {
        return (
                <div className="menu">
                    <Link to='/index.html'><button id="menu_cpf" value="cpf" onClick={this.setHash}>Dados Pessoais</button></Link>
                    <Link to='/card'><button id="menu_card" value="card" onClick={this.setHash}>Cartão de credito</button></Link>                    
                </div>
        );
    }
}
