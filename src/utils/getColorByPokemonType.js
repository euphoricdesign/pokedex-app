import { POKEMON_TYPE_COLORS } from './constansts'

const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()]

export default getColorByPokemonType