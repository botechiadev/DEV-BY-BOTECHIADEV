const value = process.argv[2];
const value1 = process.argv[3]
console.log(value)
if (value1 === "iniciado") {
  console.log("node exercicios/ex1.js");
} else if (value1 === "player") {
  console.log("node ex2.js");
} else {
  console.log("error");
}
