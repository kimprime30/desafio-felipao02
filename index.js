function ranque(vitorias, derrotas) {
  return vitorias - derrotas;
  
}

const saldo =  ranque(50,20);
let nivel = ''

if (saldo < 10) {
  nivel = "Ferro"
} else if (saldo > 10 && saldo <= 20) {
  nivel = "Bronze"
} else if (saldo >= 21 && saldo <= 50) {
  nivel =  "Prata"
} else if (saldo >= 51 && saldo <= 80) {
  nivel = "Ouro"
} else if (saldo >= 81 && saldo <= 90) {
  nivel = "Diamante"
}else if (saldo >= 91 && saldo <= 100) {
  nivel = "Lendario"
} else if (saldo >100) {
  nivel = "Imortal"
}
console.log(
  `O Herói tem saldo de **${saldo}** vitórias e está no nível de **${nivel}**`
);


