function validarEmail(email) {
    return ({valido: true, text: ''});
}

function validarSenha(senha) {
    if (senha.length < 6 || senha.length > 12) {
        return ({ valido: false, text: 'Senha deve ter entre 6 e 12 dígitos.' });
    } else {
        return ({ valido: true, text: '' });
    }
}

function validarNome(nome) {
    if (nome.length < 3) {
        return ({ valido: false, text: "Nome deve ter pelo menos 3 caracteres." })
    } else {
        return ({ valido: true, text: "" })
    }
}

function validarSobrenome(nome) {
    if (nome.length === 0) {
        return ({ valido: false, text: "Sobrenome deve ter pelo menos 1 caractere." })
    } else {
        return ({ valido: true, text: "" })
    }
}

function validarCpf(cpf) {
    if (cpf.length !== 11) {
        return ({ valido: false, text: 'CPF deve ter 11 dígitos.' });
    } else {
        return ({ valido: true, text: '' });
    }
}

export {
    validarEmail,
    validarSenha,
    validarNome,
    validarSobrenome,
    validarCpf,
};