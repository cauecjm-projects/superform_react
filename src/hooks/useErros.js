import React, { useState } from 'react';

function useErros(validacoes) {
    const estadoInicial = criarEstadoinicial(validacoes);
    const [erros, setErros] = useState(estadoInicial);

    function validarCampos(e) {
        const { name, value } = e.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function checkEnviar() {
        for (let campo in erros) {
            if (!erros[campo].valido) {
                return false
            }
        }
        return true;
    }

    function setBlankField(field) {
        const novoEstado = { ...erros };
        novoEstado[field] = erroBlank();
        setErros(novoEstado);
     }

    return [erros, validarCampos, checkEnviar, setBlankField];
}

function criarEstadoinicial(validacoes) {
    const estadoInicial = {}
    for(let campo in validacoes) {
        estadoInicial[campo] = erroBlank();
    }

    return estadoInicial;
}

export default useErros;

function erroBlank(){
    return { valido: true, text: '' };
}