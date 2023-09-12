import { useState, useEffect, useCallback } from 'react'
import { SafeAreaView } from 'react-native'

import { getPokemonsApi, getPokemonInfo } from '../api/pokemon'
import PokemonList from '../components/PokemonList'

import GlobalStyles from '../../GlobalStyles';

export default function Pokedex() { 

  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState(null)

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPokemons()
    console.log('Cargando Pokemons por primera vez')
  }, [])

  const loadPokemons = useCallback(async () => {
    // inicializamos la "carga" del request
    setLoading(true);

    try {
      
      const data = await getPokemonsApi(nextUrl)

      setNextUrl(data.next)

      const pokemonsArray = []

      for (const pokemon of data.results) {
        const pokemonDetails = await getPokemonInfo(pokemon.url)
        
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default

        })
      }

      setPokemons([...pokemons, ...pokemonsArray])

    } catch (error) {
        console.log(error)
    } finally {
        // regresamos loading a false
        setLoading(false);
    }

  })

  

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <PokemonList 
        pokemons={pokemons} 
        loadPokemons={loadPokemons}
        nextUrl={nextUrl}
        isLoading={loading}
      />
    </SafeAreaView>
  )
}
