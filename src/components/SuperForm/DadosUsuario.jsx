import React, { useState, useContext } from 'react';

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import { TextField, Button } from '@material-ui/core';

import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

function DadosUsuario({ onSubmitForm }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, checkEnviar, setBlankField] = useErros(validacoes);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            if (checkEnviar()) {
                onSubmitForm({ email, senha });
            }
        }}>
            <TextField
                value={email}
                error={!erros.email.valido}
                helperText={erros.email.text}
                id="email"
                name="email"
                label="email"
                type="email"
                variant="outlined"
                margin="dense"
                required
                fullWidth
                onChange={(e) => { setEmail(e.target.value) }}
                onBlur={validarCampos}
                onFocus={(e) => {
                    setBlankField(e.target.name);
                    // setMsgForm("");
                }}
            />
            <TextField
                value={senha}
                error={!erros.senha.valido}
                helperText={erros.senha.text}
                id="senha"
                name="senha"
                label="senha"
                type="password"
                variant="outlined"
                margin="dense"
                required
                fullWidth
                onChange={(e) => {
                    let tmpSenha = e.target.value;
                    const senhaValido = validacoes[e.target.name](e.target.value);
                    if (!senhaValido.valido) { tmpSenha = tmpSenha.substr(0, 12); }
                    setSenha(tmpSenha);
                }}
                onBlur={validarCampos}
                onFocus={(e) => {
                    setBlankField(e.target.name);
                    // setMsgForm("");
                }}
            />
            <Button
                type="submit"
                variant="outlined"
                color="primary"
                endIcon={<ChevronRightRoundedIcon />}
            >
                PRÓXIMO
            </Button>
        </form>
    );
}

export default DadosUsuario;