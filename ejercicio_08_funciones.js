function sinParametros(){
    return true
};

console.log(sinParametros());

//////////////
async function asincronica(){
    return setTimeout(() => console.log("Hola soy una promesa"), 5000);
}               

//////////////
function* generadora(){
    let par = 0;
    while(true){
        par+=2;
        yield par
    }
}