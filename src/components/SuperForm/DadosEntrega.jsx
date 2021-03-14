import React, { useState } from 'react';

import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
import { FormGroup, TextField, Button } from '@material-ui/core'

function DadosEntrega({ onSubmitForm }) {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [numero, setNumero] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            onSubmitForm({ cep, endereco, numero, estado, cidade });
        }}>
            <FormGroup row>
            <TextField
                id="cep"
                name="cep"
                label="CEP"
                type="number"
                variant="outlined"
                margin="dense"
                value={cep}
                onChange={(e) => {
                    setCep(e.target.value)
                }}
            />
            </FormGroup>
            <FormGroup row>
            <TextField
                id="endereco"
                name="endereco"
                label="Endereco"
                type="text"
                variant="outlined"
                margin="dense"
                fullWidth
                value={endereco}
                onChange={(e) => {
                    setEndereco(e.target.value)
                }}
            />
            <TextField
                id="numero"
                name="numero"
                label="Número"
                type="text"
                variant="outlined"
                margin="dense"
                value={numero}
                onChange={(e) => {
                    setNumero(e.target.value)
                }}
            />
            </FormGroup>
            <FormGroup row>
            <TextField
                id="estado"
                name="estado"
                label="Estado"
                type="text"
                variant="outlined"
                margin="dense"
                value={estado}
                onChange={(e) => {
                    setEstado(e.target.value)
                }}
            />
            <TextField
                id="cidade"
                name="cidade"
                label="Cidade"
                type="text"
                variant="outlined"
                margin="dense"
                value={cidade}
                onChange={(e) => {
                    setCidade(e.target.value)
                }}
            />
            </FormGroup>
            <Button
                type="submit"
                variant="outlined"
                color="primary"
                startIcon={<CheckCircleOutlineRoundedIcon />}
            >
                FINALIZAR CADASTRO
            </Button>
        </form>
    );
}

export default DadosEntrega;