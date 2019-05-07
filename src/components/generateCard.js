import React, { Component } from 'react';
import createCard from '../Helpers/createCreditCard'
import "../css/style.css";

export default class CreateCreditCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            number: '',
            expDate: '',
            cvv: '',
            flags: ['visa', 'masterCard', 'discover', 'amex']
        };

        this.newCard = this.newCard.bind(this)
    }

    newCard(e) {

        this.setState({
            type: e.target.value,
            expDate: createCard.exp(),
            cvv: createCard.cvv(),
        })

        // eslint-disable-next-line default-case
        switch (e.target.value) {
            case 'visa':
                this.setState({ number: createCard.visa() })
                break;
            case 'masterCard':
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

    componentDidUpdate() {
        console.log(this.state);
    }


    render() {
        const button = this.state.flags.map((flags, index) => {
            return <button value={flags} key={index} onClick={this.newCard}>{flags}</button>;
        })

        return (
            <div>
                {button}
                <div>
                    <p>Card Number: {this.state.number}</p>
                    <p>Exp: {this.state.expDate}</p>
                    <p>Cvv: {this.state.cvv}</p>
                </div>
            </div>
        );
    }
}
