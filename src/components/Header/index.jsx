import React, { Component } from 'react';

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

    render() {
        return (
                <div className="menu">
                    <button id="menu_cpf" value="cpf" onClick={this.setHash}>Dados Pessoais</button>
                    <button id="menu_card" value="card" onClick={this.setHash}>Cartão de credito</button>                  
                </div>
        );
    }
}
