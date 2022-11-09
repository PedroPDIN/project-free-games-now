/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */

// Algoritmo Fisher-Yates ==============================>
// https://www.horadecodar.com.br/2020/10/26/gerar-varios-numeros-aleatorios-sem-repeticao-em-javascript/

const fisherYates = (maxNumber: number): number[] => {
  const arrNumber = [];

  for (let i = 0; i < maxNumber; i += 1) {
    arrNumber[i] = i + 1;
  }

  let randomNumber;
  let tmp;

  for (let i = arrNumber.length; i;) {
    randomNumber = Math.random() * i-- | 0;
    tmp = arrNumber[randomNumber];
    arrNumber[randomNumber] = arrNumber[i];
    arrNumber[i] = tmp;
  }

  return arrNumber.slice(0, 6);
};

export default fisherYates;
