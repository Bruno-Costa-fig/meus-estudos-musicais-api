function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove caracteres especiais
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false; // CPF deve ter 11 dígitos e não pode ser sequencial
    }
    return true;
}

module.exports = { validarCPF };