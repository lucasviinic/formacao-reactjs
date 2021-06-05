export class ContaCorrente {
    agencia;
    //#saldo, uma proposta para tornar atributos privados
    _saldo;

    saca(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor;
        }
    }

    deposita(valor) {
        if (valor < 0){
            return;
        }

        this._saldo += valor
    }
}