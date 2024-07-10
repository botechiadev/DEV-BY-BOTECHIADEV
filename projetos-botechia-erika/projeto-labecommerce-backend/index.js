console.log("node-package-json iniciado")

const query = process.argv[2]

if(!query){
    console.log("argumento nao informado")
}else if (query.toUpperCase() === "Bananinha"){
    console.log("node ./../exercicios/ex2.js")
}