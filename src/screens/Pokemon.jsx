import { useState, useEffect } from 'react';
import { ScrollView } from 'react-native'
import { getPokemonDetails } from '../api/pokemon';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats'
import Icon from 'react-native-vector-icons/FontAwesome5'

// import GlobalStyles from '../../GlobalStyles';


export default function Pokemon({ navigation, route: {params} }) {

  const [pokemonInfo, setPokemonInfo] = useState(null)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon 
          name='arrow-left' 
          color='#fff' 
          size={20} 
          style={{ marginLeft: 8 }} 
          onPress={() => navigation.goBack()} 
        />
      )
    })
  }, [navigation, params])
  

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetails(params.id)
        setPokemonInfo(response)
      } catch (error) {
        navigation.goBack()
      }
    })()
  }, [params])
  
  if (!pokemonInfo) return

  return (
    <ScrollView>
      <Header 
        name={pokemonInfo.name} 
        order={pokemonInfo.order}
        image={pokemonInfo.sprites.other['official-artwork'].front_default}
        type={pokemonInfo.types[0].type.name}
      />
      <Type types = {pokemonInfo.types}/>
      <Stats stats={pokemonInfo.stats} />
    </ScrollView>
  )
}