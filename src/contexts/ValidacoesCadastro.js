import React from 'react';

import {
    validarEmail,
    validarSenha,
    validarNome,
    validarSobrenome,
    validarCpf,
  } from '../models/cadastro';

const ValidacoesCadastro = React.createContext(
    {
        email: validarEmail,
        senha: validarSenha,
        nome: validarNome,
        sobrenome: validarSobrenome,
        cpf: validarCpf,
        cep: semValidacao,
    }
);

function semValidacao(dados) {
    console.log(dados);
    return { valido: true, text: '' }
}

export default ValidacoesCadastro;