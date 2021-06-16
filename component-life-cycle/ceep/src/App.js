import React, { Component } from 'react'
import ListaDeNotas from './components/ListaDeNotas'
import FormularioCadastro from './components/FormularioCadastro'
import ListaDeCategorias from './components/ListaDeCategorias'
import './assets/App.css'
import './assets/index.css'
import Categorias from './dados/Categorias'
import Notas from './dados/Notas'

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new Notas();
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.notas.criarNota} categorias={this.categorias.categorias}/>
        <main className="conteudo-principal">
          <ListaDeCategorias categorias={this.categorias.categorias} adicionarCategoria={this.categorias.adicionarCategoria}/>
          <ListaDeNotas notas={this.notas.notas} apagarNota={this.notas.apagarNota}/>
        </main> 
      </section>
    );
  }
}

export default App;
