import React, { Component } from "react";
import "../src/css/style.css";
import helper from '../src/Helpers/geraCPF'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.createCPF = this.createCPF.bind(this);
        this.createCNPJ = this.createCNPJ.bind(this);
        this.copy = this.copy.bind(this);
        this.useMask = this.useMask.bind(this);

        this.state = {
            document: "",
            mask: localStorage.getItem('mask') === 'true' ? true : false
        };
    }

    createCPF(e) {
        e.preventDefault();

        this.setState({ document: helper.gerarCPF(this.state.mask) });

        this.copy(e)
    }

    createCNPJ(e) {
        e.preventDefault();

        this.setState({ document: helper.gerarCNPJ(this.state.mask) });

        this.copy(e)
    }

    useMask(e) {

        localStorage.setItem('mask', this.refs.mask.checked);
        this.setState({ mask: this.refs.mask.checked });
    }

    copy(e) {
        this.refs.input.select();
        document.execCommand('copy');
    }

    componentDidUpdate() {
        this.refs.input.value = this.state.document
        this.copy();
    }

    render() {
        return (
            <div className="App">

                <div className="btn-selector">
                    <button className="btn-cpf" id="btn-cpf" onClick={this.createCPF}>CPF</button>
                    <button className="btn-cnpj" id="btn-cnpj" onClick={this.createCNPJ}>CNPJ</button>
                </div>

                <div className="mask">
                    <input type="checkbox" ref="mask" defaultChecked={this.state.mask} onClick={this.useMask} />
                    <span>Usar máscara</span>
                </div>

                <div className="input-result">
                    <input type="text" ref="input" defaultValue={this.state.document} onClick={this.copy} />
                    <span style={{ visibility: this.state.document ? 'visible' : 'hidden' }}>Copiado!</span>
                </div>

            </div>
        );
    }
}
