console.log('loadingUtils')
function isEvenOrOdd(num){
    const check0 =(num)=>num === 0? (true): checkEvenOdd(num)
    const checkEvenOdd = (num) =>num % 2 == 0 ? (true):(false)
}

const askByPrompt = (value) => {
  const askPrompt = prompt(value);

  const typeAnalisis = (value) => {
    if (askPrompt == typeof string && Number(askPrompt) != NaN) {
      return Number(askPrompt);
    } else {
      return askPrompt;
    }
  };
  return typeAnalisis(value);
};

const compare2NumValues = (n1, n2) => (n1 > n2 ? true : false);

const checkTrueSendFloat = (param) => (param ? 1 : 0);