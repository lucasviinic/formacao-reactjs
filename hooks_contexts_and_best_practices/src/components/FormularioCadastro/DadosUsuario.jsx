import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosUsuario(){
    return(
        <form>
            <TextField id="email" label="Email" type="email" />
            <TextField id="senha" label="Senha" type="password" />
            <Button type="submit">Cadastrar</Button>
        </form>
    )
}

export default DadosUsuario;