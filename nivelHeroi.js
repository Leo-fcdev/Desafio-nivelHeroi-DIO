/*# 1️⃣ Desafio Classificador de nível de Herói

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões

## Objetivo

Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"*/

let nomeHeroi = "Leonardo";
let xp = 7500
let patente = ""

switch (xp){
    case xp < 1000:
        patente = "Ferro"
        break;
    
    case xp >= 1001 && xp <= 2000:
        patente = "Bronze"
        break;
    
    case xp >= 2001 && xp <= 5000:
        patente = "Prata"
        break;
    
    case xp >= 5001 && xp <= 7000:
        patente = "Ouro"
        break;
    
    case xp >= 7001 && xp <= 8000:
        patente = "Platina"
        break;
    
    case xp >= 8001 && xp <= 9000:
        patente = "Ascendente"
        break;
    
    case xp >= 9001 && xp <= 10000:
        patente = "Imortal"
        break;

    default:
        patente = "Radiante"
        break;
}

console.log(`O Héroi de nome ${nomeHeroi} está no nível ${patente}`)