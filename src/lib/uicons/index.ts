import type {Enum} from "../../@types/api";

export interface Pokemon {
    pokemon: Enum
    form?: Enum
    costume?: Enum
    temp_evolution?: Enum
}


export function getPokemon(pokemon: Pokemon) {
    const formattedMonId = String(pokemon.pokemon.value).padStart(3, "0")

    let formattedFormId = "00"
    if (pokemon.form && pokemon.form.value) {
        formattedFormId = pokemon.form.value.toString()
    }

    return `https://raw.githubusercontent.com/xxleevo/monicons/master/classic/pokemon_icon_${formattedMonId}_${formattedFormId}.png`
}