import React, {Component} from 'react'
import Cpf from './Cpf/index'
import Card from './Card/index'
import Footer from './Footer/index'
import storage from '../Helpers/storage'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      hash: storage.get('hash') || 'cpf'
    }
  }

  handleHash = (e) => {
    const hash = e.target.value
    
    if (hash === "cpf" && this.state.hash !== 'cpf'){
      this.setState({
        hash: 'slide-cpf',
      })
      storage.set('hash', 'cpf')
    }

    if (hash === 'card' && this.state.hash !== 'card') {
      this.setState({
        hash: 'slide-card',
      })
      storage.set('hash', 'card')
    }
  }

  componentDidMount() {

    const hash = storage.get('hash')

    this.setState({hash: hash})
  }

  render() {
    return (
        <div >
            <div className="menu">
                  <button id="menu_cpf" value="cpf" onClick={(e) => this.handleHash(e)} >Dados Pessoais</button>
                  <button id="menu_card" value="card" onClick={(e) => this.handleHash(e)}>Cartão de credito</button>                  
              </div>
            <div className="slide-next">
                <Cpf show={this.state.hash} />
                <Card show={this.state.hash}/>
            </div>
            <Footer />
        </div>
    );
  }
}
