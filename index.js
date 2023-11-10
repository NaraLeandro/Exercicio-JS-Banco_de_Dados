let banco = {
    conta: "12345-6",
    saldo: 1000.00,
    tipoConta: "Corrente",
    agencia: "7890",
    buscarSaldo: function() {
        return this.saldo;
    },
    deposito: function(valor) {
        if (valor > 0) {
            this.saldo += valor;
            return "Depósito de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;

        } else {
            return "Valor inválido para depósito";
        }
    },
    saque: function(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            return "Saque de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;

        } else {
            return "Saldo insuficiente ou valor inválido para saque.";
        }
    },
    numeroDaConta: function() {
        return this.conta;
    }
};

//Exemplos de uso dos métodos do objeto "banco"//

console.log(banco.buscarSaldo()); // Retorna o saldo atual
console.log(banco.deposito(500));   // Realiza um depósito de R$500
console.log(banco.saque(200));      // Realiza um saque de R$200
console.log(banco.numeroDaConta()); // Retorna o número da conta