import { SafeAreaView, Text, StatusBar } from 'react-native'
import GlobalStyles from '../../GlobalStyles';

export default function Favorites() {
  return (
    <SafeAreaView>
      {/* <StatusBar barStyle="light-content" /> - Controla la barra de estado donde se mustra la hora, nivel de batería, etc */}
      <Text>Favoritos</Text>
    </SafeAreaView>
  )
}