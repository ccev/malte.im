import type {Enum} from "../../@types/api";

interface Pokemon {
    pokemon: Enum
    form: Enum | undefined
    costume: Enum | undefined
    temp_evolution: Enum | undefined
}


export function getPokemon(pokemon: Pokemon) {
    const formattedMonId = String(pokemon.pokemon.value).padStart(3, "0")

    let formattedFormId = "00"
    if (pokemon.form && pokemon.form.value) {
        formattedFormId = pokemon.form.value.toString()
    }

    return `https://raw.githubusercontent.com/xxleevo/monicons/master/classic/pokemon_icon_${formattedMonId}_${formattedFormId}.png`
}