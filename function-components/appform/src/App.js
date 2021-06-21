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
        <FormularioCadastro onSubmit={onSubmitForm} />
      </Container>
    )
  }
}

function onSubmitForm(dados){
  console.log(dados)
}

export default App
