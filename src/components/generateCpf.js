import React, { Component } from "react";
import helper from '../Helpers/createCpf'
import createCard from '../Helpers/createCard'
import '../css/style.css';
import amex from'../images/amex.png'

export default class GenerateCpf extends Component {
    constructor(props) {
        super(props);

        this.createCPF = this.createCPF.bind(this);
        this.createCNPJ = this.createCNPJ.bind(this);
        this.copy = this.copy.bind(this);
        this.useMask = this.useMask.bind(this);
        this.newCard = this.newCard.bind(this)
        this.setHash = this.setHash.bind(this)

        this.state = {
            hash: 'cpf',

            document: '',
            mask: localStorage.getItem('mask') === 'true' ? true : false,

            type: '',
            number: '',
            expDate: '',
            cvv: '',
            flags: ['visa', 'master', 'amex', 'discover' ],
            image: amex

        };
    }

    createCPF(e) {
        e.preventDefault();

        this.setState({ document: helper.gerarCPF(this.state.mask) });
    }

    createCNPJ(e) {
        e.preventDefault();

        this.setState({ document: helper.gerarCNPJ(this.state.mask) });
    }

    newCard(e) {

        this.setState({
            type: e.target.value,
            expDate: createCard.exp(),
            cvv: createCard.cvv(),
        })

        console.log(e.target.value);

        // eslint-disable-next-line default-case
        switch (e.target.value) {
            case 'visa':
                this.setState({ number: createCard.visa() })
                break;
            case 'master':
                this.setState({ number: createCard.masterCard() })
                break;
            case 'discover':
                this.setState({ number: createCard.discover() })
                break;
            case 'amex':
                this.setState({ number: createCard.amex() })
                break;

        }
    }

    useMask(e) {

        localStorage.setItem('mask', this.refs.mask.checked);
        this.setState({ mask: this.refs.mask.checked });
    }

    copy(e) {
        this.refs.input.select();
        document.execCommand('copy');
    }

    setHash(e) {
        this.setState({ hash: e.target.value })
    }

  

    render() {

        const button = this.state.flags.map((flags, index) => {

           return  <button key={index} value={flags} onClick={this.newCard} style={{ 
            backgroundImage: `url("../images/${flags}.png")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat' }} >{flags}</button> 
                
        });

        return (
            <div className="main">

                <div className="menu">
                    <button value='cpf' onClick={this.setHash}>CPF</button>
                    <button value='card' onClick={this.setHash}>Cartão</button>
                </div>
                {
                    this.state.hash === 'cpf' ?

                        <div className="cpf">

                            <div className="input-result">
                                <input type="text" ref="input" defaultValue={this.state.document} onClick={this.copy} />

                            </div>

                            {/* <div className="copied">
                                <span style={{ display: this.state.document ? 'block' : 'none' }}>Copiado</span>
                            </div> */}
                            <div className="mask">
                                <input type="checkbox" ref="mask" defaultChecked={this.state.mask} onClick={this.useMask} />
                                <span>Usar máscara</span>
                            </div>

                            <div className="btn-selector">
                                <button className="btn-cpf" id="btn-cpf" onClick={this.createCPF}>CPF</button>
                                <button className="btn-cnpj" id="btn-cnpj" onClick={this.createCNPJ}>CNPJ</button>
                            </div>



                        </div>
                        :

                        <div className="card">
                            <div>
                                {button}
                            </div>

                            <div>
                                <div className='input-result' >
                                    <label>Cartão</label>
                                    <input defaultValue={this.state.number} />
                                </div>
                                <div className='input-result' >
                                    <label>Exp</label>
                                    <input defaultValue={this.state.expDate} />
                                </div>
                                <div className='input-result' >
                                    <label>Cvv</label>
                                    <input defaultValue={this.state.cvv} />
                                </div>
                            </div>
                        </div>
                }


            </div>

        );
    }
}
