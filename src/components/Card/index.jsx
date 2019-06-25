import React, { Component } from 'react'

// import { Container } from './styles';

export default class Card extends Component {
  render() {
    return (
      <div>
        <input type="text" name="cardInput" id="cardInput"/>
        <input type="text" name="dateInput" id="dateInput"/>
        <input type="text" name="cvvInput" id="cvvInput"/>
        <div>
          <button>visa</button>
          <button>master</button>
          <button>amex</button>
          <button>elo</button>
        </div>
      </div>
    )
  }
}
