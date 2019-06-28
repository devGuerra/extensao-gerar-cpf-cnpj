import React, { Component } from 'react';
import helper from '../../Helpers/createCpf'
import storage from '../../Helpers/storage';
import '../../css/style.css';


export default class Cpf extends Component {

  constructor(props) {
    super(props);

    this.state = {
      document: null,
      mask: storage.get('mask') === "true",
      hash: storage.get('hash')
    }

  }

  createCPF(e) {
    e.preventDefault();
    this.setState({ document: helper.gerarCPF(this.state.mask) });
  }

  createCNPJ(e) {
    e.preventDefault();
    this.setState({ document: helper.gerarCNPJ(this.state.mask) });
  }

  copy(e) {
    e.target.select();
    document.execCommand('copy');
  }

  useMask(e) {
    storage.set('mask', e.target.checked);
    this.setState({ mask: e.target.checked });
  }

  render() {
    return (
      <div className="cpf" id={this.props.show}>
        <div className="input-result">
          <input type="text" name="dataInput" id="dataInput" defaultValue={this.state.document} onClick={(e) => this.copy(e)} title="copiar" />
        </div>
        <div className="mask">
          <input id="box-mask" type="checkbox" defaultChecked={this.state.mask} onClick={(e) => this.useMask(e)} />
          <span id="text-mask">Usar máscara</span>
        </div>
        <div className="btn-selector">
          <button id="btn-cpf" className="btn-cpf" onClick={(e) => this.createCPF(e)}>CPF</button>
          <button id="btn-cnpj" className="btn-cnpj" onClick={(e) => this.createCNPJ(e)}>CNPJ</button>
        </div>
      </div>
    )
  }
}
