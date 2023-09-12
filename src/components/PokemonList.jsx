import { StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import PokemonCard from './PokemonCard'

export default function PokemonList({pokemons, loadPokemons, nextUrl, isLoading}) {

    const loadMore = () => {
        loadPokemons()
    }

    return (
        <FlatList
            data= {pokemons}
            numColumns= {2}
            showsVerticalScrollIndicator= {false}
            keyExtractor={(pokemon) => pokemon.id}
            renderItem={({ item }) => <PokemonCard pokemon={item} />}
            contentContainerStyle={styles.flatListContentContainer}
            onEndReached={!isLoading && nextUrl && loadMore}
            onEndReachedThreshold={0.1}
            ListFooterComponent={
                nextUrl &&
                <ActivityIndicator
                    size="large"
                    style={styles.spinner}
                    color="#AEAEAE"
                />
            }
            
        />
    )
}

const styles = StyleSheet.create({
    flatListContentContainer: {
        paddingHorizontal: 5
    },
    spinner:{
        marginTop: 20,
        marginBottom: 60
    }
})