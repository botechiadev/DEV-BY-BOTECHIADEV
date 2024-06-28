const userAge = askByPrompt("insira sua idade")
const friendAge = askByPrompt("insira idade do melhor amigo");

const compare2Numbers = (num1, num2)=>{
    return num1 > num2
}

const rest2Numbers = (num1, num2)=>{
    return num1-num2
}

const compareAgeMsg = "Sua idade é maior do que a do seu melhor amigo: " + compare2Numbers(userAge, friendAge)
const differenceAgeMsg = (rest2Numbers(userAge, friendAge)) <0 ? rest2Numbers(friendAge, userAge): rest2Numbers(userAge, friendAge)


console.log(compareAgeMsg)