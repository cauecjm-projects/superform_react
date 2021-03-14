import React, { useState, useEffect } from 'react';

import {
    Container,
    Grid,
    Box,
    Typography,
    FormGroup,
    FormControlLabel,
    TextField,
    Switch,
    Button,
    Stepper,
    Step,
    StepLabel,
} from '@material-ui/core'

import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';
import DadosEntrega from './DadosEntrega';

function FormCadastro({ handleSubmitForm }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDadosColetados] = useState({});

    useEffect(() => {
        if(etapaAtual === formularios.length - 1){
            handleSubmitForm(dadosColetados);
        }
    })

    const formularios = [
        <DadosUsuario
          onSubmitForm={coletarDados}
        />,
        <DadosPessoais 
          onSubmitForm={coletarDados}
          voltarEtapa={voltarEtapa}
        />,
        <DadosEntrega onSubmitForm={coletarDados} />,
        <Typography component="h5" align="center" color="inherit">Cadastro efetuado. Obrigado.</Typography>
    ]

    function coletarDados(dados) {
        setDadosColetados({...dadosColetados, ...dados});
        avancarEtapa();
    }

    function avancarEtapa() {
        setEtapaAtual(etapaAtual + 1);
    }

    function voltarEtapa() {
        setEtapaAtual(etapaAtual - 1);
    }

    return (
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
        {formularios[etapaAtual]}
        </>
    )
}

export default FormCadastro;