import React, { Component } from 'react';
import helper from '../Helpers/createCpf';
import createCard from '../Helpers/createCard';
import '../css/style.css';

export default class GenerateCpf extends Component {
  constructor(props) {
    super(props);

    this.createCPF = this.createCPF.bind(this);
    this.createCNPJ = this.createCNPJ.bind(this);
    this.copy = this.copy.bind(this);
    this.useMask = this.useMask.bind(this);
    this.newCard = this.newCard.bind(this);
    this.setHash = this.setHash.bind(this);
    this.clearState = this.clearState.bind(this);
    this.cardSelected = this.cardSelected.bind(this);

    this.state = {
      hash: localStorage.getItem('hash') || '',
      document: '',
      mask: Boolean(localStorage.getItem('mask')),
      type: localStorage.getItem('type') || '',
      number: localStorage.getItem('number') || '',
      expDate: localStorage.getItem('exp') || '',
      cvv: localStorage.getItem('cvv') || '',
      flags: ['visa', 'master', 'amex', 'discover'],
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

  cardSelected(e) {
    const { className } = e.target;

    if (className !== this.state.type) {
      console.log(e.target);
    }
  }

  newCard(e) {
    const { target, className } = e;

    if (className !== this.state.type) {
      target.classList.add('selected');
    } else {
      target.classList.remove('selected');
    }

    this.setState({
      type: e.target.value,
      expDate: createCard.exp(),
      cvv: createCard.cvv(),
    });

    switch (e.target.value) {
      case 'visa':
        this.setState({ number: createCard.visa() });
        break;
      case 'master':
        this.setState({ number: createCard.masterCard() });
        break;
      case 'discover':
        this.setState({ number: createCard.discover() });
        break;
      case 'amex':
        this.setState({ number: createCard.amex() });
        break;
      default:
    }
  }

  useMask(e) {
    localStorage.setItem('mask', this.refs.mask.checked);
    this.setState({ mask: this.refs.mask.checked });
  }

  copy(e) {
    e.target.select();
    document.execCommand('copy');
  }

  clearState(e) {
    this.setState({
      document: '',
      type: '',
      number: '',
      expDate: '',
      cvv: '',
    });
  }

  setHash(e) {
    this.setState({ hash: e.target.value });

    this.clearState();
  }

  componentDidUpdate() {
    if (this.state.hash === 'cpf') {
      this.refs.input.value = this.state.document;
      this.refs.input.select();
      document.execCommand('copy');
    } else {
      this.refs.cardNumber.value = this.state.number;
      this.refs.cardDate.value = this.state.expDate;
      this.refs.cardCvv.value = this.state.cvv;
    }

    localStorage.setItem('hash', this.state.hash);
    localStorage.setItem('type', this.state.type);
    localStorage.setItem('number', this.state.number);
    localStorage.setItem('exp', this.state.expDate);
    localStorage.setItem('cvv', this.state.cvv);
  }

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    const button = this.state.flags.map((flags, index) => {
      return (
        <button
          id={`select_${flags}`}
          key={index}
          className={flags === this.state.type ? `${flags} selected` : flags}
          value={flags}
          onClick={this.newCard}
        />
      );
    });

    return (
      <div className="main">
        <div className="menu">
          <button id="menu_cpf" value="cpf" onClick={this.setHash}>
            Dados Pessoais
          </button>
          <button id="menu_card" value="card" onClick={this.setHash}>
            Cartão de credito
          </button>
        </div>
        {this.state.hash === 'cpf' ? (
          <div className="cpf">
            <div className="input-result">
              <input
                id="input_cpf"
                type="text"
                ref="input"
                defaultValue={this.state.document}
                onClick={this.copy}
              />
            </div>

            <div className="copied">
              <span
                id="copied"
                style={{ display: this.state.document ? 'block' : 'none' }}
              >
                Copiado
              </span>
            </div>
            <div className="mask">
              <input
                id="box-mask"
                type="checkbox"
                ref="mask"
                defaultChecked={this.state.mask}
                onClick={this.useMask}
              />
              <span id="text-mask">Usar máscara</span>
            </div>

            <div className="btn-selector">
              <button id="btn-cpf" className="btn-cpf" onClick={this.createCPF}>
                CPF
              </button>
              <button
                id="btn-cnpj"
                className="btn-cnpj"
                onClick={this.createCNPJ}
              >
                CNPJ
              </button>
            </div>
          </div>
        ) : (
          <div className="card">
            <div>{button}</div>

            <div>
              <div className="input-result">
                <label>Cartão</label>
                <input
                  id="input_card"
                  ref="cardNumber"
                  defaultValue={this.state.number}
                  onClick={this.copy}
                />
              </div>
              <div className="input-result">
                <label>Exp</label>
                <input
                  id="input_dateExp"
                  ref="cardDate"
                  defaultValue={this.state.expDate}
                  onClick={this.copy}
                />
              </div>
              <div className="input-result">
                <label>Cvv</label>
                <input
                  id="input_cvv"
                  ref="cardCvv"
                  defaultValue={this.state.cvv}
                  onClick={this.copy}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
