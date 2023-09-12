import { View, Text, StyleSheet } from 'react-native'
import getColorByPokemonType from '../../utils/getColorByPokemonType'

export default function Type({ types }) {

    return (
        <View style={styles.content}>
            {types.map((item, index) => (
                <View 
                    style={{...styles.pill, backgroundColor: getColorByPokemonType(item.type.name)}} 
                    key={index}
                >
                    <Text style={styles.name}>{item.type.name}</Text>
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pill: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    name: {
        textTransform: 'capitalize'
    }
})