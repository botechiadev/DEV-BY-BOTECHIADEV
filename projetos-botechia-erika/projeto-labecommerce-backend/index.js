console.log("node-package-json iniciado")

const query = process.argv[2]

if(query){
    console.log("node exercicios/process-argv.js " + query)
}else{
    console.log("argumento nao informado")
}