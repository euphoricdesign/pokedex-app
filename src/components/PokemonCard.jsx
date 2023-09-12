import { useNavigation } from '@react-navigation/native'

import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import getColorByPokemonType from '../utils/getColorByPokemonType'


export default function PokemonCard({pokemon}) {
    const navigation = useNavigation()

    const pokemonColor = getColorByPokemonType(pokemon.type)

    const bgStyles = {
        backgroundColor: pokemonColor,
        ...styles.bgStyles
    }

    const goToPokemon = () => { // funcion onPress
        navigation.navigate('Pokemon', { id: pokemon.id }) // en params se envian solo datos planos {id: string/number}
    }

    return (
        <TouchableWithoutFeedback  onPress={goToPokemon}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={bgStyles}>
                        <Text style={styles.number}>{`#0${pokemon.order}`.padStart(3, 0)}</Text>
                        <Text style={styles.name}>{pokemon.name}</Text>
                        <Image source={{uri: pokemon.image}} style={styles.image} />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    number: {
        position:'absolute',
        right: 10,
        top: 10, 
        color: '#fff',
        fontSize: 11
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10,
        textTransform: 'capitalize'
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height: 90
    }
})