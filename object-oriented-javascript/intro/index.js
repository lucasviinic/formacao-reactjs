import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente();
cliente1.nome = "Carlos"
cliente1.cpf = 83422392392
cliente1.agencia = 1001
cliente1.saldo = 0

const cliente2 = new Cliente();
cliente2.nome = "Ana"
cliente2.cpf = 88822392392
cliente2.agencia = 1001
cliente2.saldo = 10

const contaCorrenteCarlos = new ContaCorrente()
contaCorrenteCarlos.agencia = 101
contaCorrenteCarlos._saldo = 1000
contaCorrenteCarlos.deposita(50)
contaCorrenteCarlos.saca(100)


console.log(contaCorrenteCarlos)

