import React, { Component } from "react";
import './style.css'

class ListaDeCategorias extends Component {
  
  _handlerEventoInput(e) {
    if (e.key == 'Enter'){
        console.log('adicionar categoria')
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          <li  className="lista-categorias_item">Categoria</li>
        </ul>
        <input type="text" className="lista-categorias_input" placeholder="Adicionar Categoria"
            onKeyUp={this._handlerEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
