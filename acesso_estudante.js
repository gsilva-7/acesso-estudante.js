import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const nome = await rl.question('Digite o nome do aluno: ');
const idade = await rl.question('Digite a idade do aluno: ');

if (idade >= 18) {
  console.log(`O aluno ${nome} tem ${idade} anos e é MAIOR de idade (Acesso permitido).`);
} else {
  console.log(`O aluno ${nome} tem ${idade} anos e é MENOR de idade (Requer autorização dos pais).`);
}

rl.close();