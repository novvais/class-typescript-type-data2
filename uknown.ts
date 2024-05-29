const json = JSON.stringify([ "Edu", "Danilo", "Duda" ])

function converterJSON(info: string): unknown {
    return JSON.parse(info)
}

const jsonConvertido = converterJSON(json) as string[];

console.log(jsonConvertido)