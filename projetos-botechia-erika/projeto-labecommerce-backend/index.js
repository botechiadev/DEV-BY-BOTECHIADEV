console.log("node-package-json iniciado")

const query = process.argv[2]

const query1 = process.argv[3];


if(query && query1){
    console.log("node exercicios/process-argv.js " + query + " "+ query1)
}else{
    console.log("argumento nao informado")
}