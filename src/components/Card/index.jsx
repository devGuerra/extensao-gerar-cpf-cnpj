import React, { Component } from 'react'
import storage from '../../Helpers/storage';
import createCard from '../../Helpers/createCard';
import log from '../../Helpers/log';

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: storage.get('type'),
      number: storage.get('number'),
      expDate: storage.get('exp'),
      cvv: storage.get('cvv'),
      flags: ['visa', 'master', 'amex', 'discover'],
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

  cardSelected(e) {
    const { className } = e.target;

    if (className !== this.state.type) {
      log(e.target);
    }
  }

  componentDidUpdate() {

    this.refs.cardNumber.value = this.state.number;
    this.refs.cardDate.value = this.state.expDate;
    this.refs.cardCvv.value = this.state.cvv;
    
    storage.set('type', this.state.type);
    storage.set('number', this.state.number);
    storage.set('exp', this.state.expDate);
    storage.set('cvv', this.state.cvv);
  }

  copy(e) {
    e.target.select();
    document.execCommand('copy');
  }

  render() {
    const button = this.state.flags.map((flags, index) => {
      return (
        <button id={`select_${flags}`} key={index} className={flags === this.state.type ? `${flags} selected` : flags} value={flags} onClick={(e) => this.newCard(e)} />
      );
    });
    return (
      <div className="card" id={this.props.show}>
        <div>{button}</div>
        <div>
          <div className="input-result">
            <label>Cartão</label>
            <input id="input_card" ref="cardNumber" defaultValue={this.state.number} onClick={(e) => this.copy(e)} title="Copiar" />
          </div>
          <div className="input-result">
            <label>Exp</label>
            <input id="input_dateExp" ref="cardDate" defaultValue={this.state.expDate} onClick={(e) => this.copy(e)} title="Copiar" />
          </div>
          <div className="input-result">
            <label>Cvv</label>
            <input id="input_cvv" ref="cardCvv" defaultValue={this.state.cvv} onClick={(e) => this.copy(e)} title="Copiar" />
          </div>
        </div>
      </div>
    )
  }
}
