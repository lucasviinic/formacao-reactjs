import './App.css'
import React, { Component, Fragment } from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

import 'fontsource-roboto'
import { Container, Typography } from '@material-ui/core'

class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm" style={{marginTop: 80}}>
        <Typography variant="h4" component="h1" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro onSubmit={onSubmitForm} validaCPF={validaCPF} />
      </Container>
    )
  }
}

function onSubmitForm(dados){
  console.log(dados)
}

function validaCPF(cpf){
  if (cpf.length !== 11){
    return {valido: false, texto: 'O CPF deve ter 11 dígitos'}
  } else {
    return {valido: true, texto: ''}
  }
}

export default App
