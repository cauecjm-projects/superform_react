import React, { useState, useContext } from 'react';

import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import ChevronLeftRounded from '@material-ui/icons/ChevronLeftRounded';

import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErros from '../../hooks/useErros';

import {
    Container,
    Grid,
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    TextField,
    Switch,
    Button
} from '@material-ui/core'

function DadosPessoais({ onSubmitForm, voltarEtapa }) {
    const erroBlank = { valido: true, text: '' };

    //const [msgForm, setMsgForm] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [cpf, setCpf] = useState("");
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, checkEnviar, setBlankField] = useErros(validacoes);

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (checkEnviar()) {
                    onSubmitForm({ nome, sobrenome, cpf, promocoes, novidades });
                }
            }}>
                <FormGroup row>
                    <TextField
                        value={nome}
                        error={!erros.nome.valido}
                        helperText={erros.nome.text}
                        id="nome"
                        name="nome"
                        label="Nome"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        required
                        onChange={(e) => { setNome(e.target.value); }}
                        onBlur={validarCampos}
                        onFocus={(e) => {
                            setBlankField(e.target.name);
                            // setMsgForm("");
                        }}
                    />
                    <TextField
                        value={sobrenome}
                        error={!erros.sobrenome.valido}
                        helperText={erros.sobrenome.text}
                        id="sobrenome"
                        name='sobrenome'
                        label="Sobrenome"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        onChange={(e) => {
                            setSobrenome(e.target.value);
                        }}
                        onBlur={validarCampos}
                        onFocus={(e) => {
                            setBlankField(e.target.name);
                            // setMsgForm("");
                        }}
                    />
                    <TextField
                        value={cpf}
                        error={!erros.cpf.valido}
                        helperText={erros.cpf.text}
                        id="cpf"
                        name="cpf"
                        label="CPF"
                        variant="outlined"
                        margin="dense"
                        fullWidth
                        required
                        onChange={(e) => {
                            let tmpCpf = e.target.value;
                            const cpfValido = validacoes[e.target.name](e.target.value);
                            if (!cpfValido.valido) { tmpCpf = tmpCpf.substr(0, 11); }
                            setCpf(tmpCpf);
                        }}
                        onBlur={validarCampos}
                        onFocus={(e) => {
                            setBlankField(e.target.name);
                            // setMsgForm("");
                        }}
                    />
                </FormGroup>
                {/* <Box
                    my={0.7}
                    p={1}
                    bgcolor={msgForm == "" ? "" : "secondary.main"}
                    color={msgForm == "" ? "" : "primary.contrastText"}
                >
                    <Typography variant="subtitle1" component="h6" align="right">{msgForm}</Typography>
                </Box> */}
                <FormGroup row>
                    <FormControlLabel
                        label="Promoções"
                        control={
                            <Switch
                                checked={promocoes}
                                name="checkedPromo"
                                color="primary"
                                onChange={(e) => { setPromocoes(e.target.checked) }}
                            />
                        }
                    />
                    <FormControlLabel
                        label="Novidades"
                        control={
                            <Switch
                                checked={novidades}
                                name="checkedNov"
                                color="primary"
                                onChange={(e) => { setNovidades(e.target.checked) }}
                            />
                        }
                    />
                    {/* <Button
                        name="btnVoltar"
                        type="submit"
                        variant="outlined"
                        color="primary"
                        startIcon={<ChevronLeftRounded />}
                    >
                        VOLTAR
                    </Button> */}
                    <Button
                        name="btnAvancar"
                        type="submit"
                        variant="outlined"
                        color="primary"
                        endIcon={<ChevronRightRoundedIcon />}
                    >
                        PRÓXIMO
                    </Button>
                </FormGroup>
            </form>
        </>
    )
}

export default DadosPessoais;