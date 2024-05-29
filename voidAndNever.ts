// Void
const teste = () => {
    console.log("Olá")
    return;
}

// Never
const validarNome = ( nome: string ) => {
        throw new Error("O nome precisa ter 5 ou mais caracteres")
}