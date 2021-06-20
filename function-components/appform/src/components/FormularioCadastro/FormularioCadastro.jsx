import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState('Lucas')

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      console.log(nome)
    }}>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)
          if (nome.length >= 3){
            setNome(nome.substr(0, 3))
          }
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        id="CPF"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" defaultChecked color="primary" />}
      />
      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" defaultChecked color="primary" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Confirmar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
