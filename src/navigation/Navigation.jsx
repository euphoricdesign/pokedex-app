import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Account from '../screens/Account'
import Favorites from '../screens/Favorites'
// import Pokedex from '../screens/Pokedex'

import PokedexNavigation from './PokedexNavigation'

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen 
            name='Favorites' 
            component={Favorites} 
            options={{
            // headerShown: false, - Muestra cabecera/stack navigation
              tabBarLabel: "Favoritos",
              tabBarIcon: ({ color, size }) => <Icon name='heart' color={color} size={size} />,
              headerTitleAlign: 'center',
              headerTitle: "Favoritos"
            }} 
        />
        <Tab.Screen 
          name='PokedexNav' 
          component={PokedexNavigation}
          options={{
            headerShown: false,
            tabBarLabel: '',
            tabBarIcon: () => renderPokeball(),
            headerTitleAlign: 'center',
            headerTitle: "Pokedex"

          }}
        />
        <Tab.Screen 
          name='Account' 
          component={Account}
          options={{
            // headerShown: false,
            tabBarLabel: "Mi cuenta",
            tabBarIcon: ({ color, size }) => <Icon name='user' color={color} size={size} />,
            headerTitleAlign: 'center',
            headerTitle: "Mi cuenta"

          }} 
        /> 
    </Tab.Navigator>
  )
}

const renderPokeball = () => {
  return (
    <Image
      source={require('../assets/pokeball.png')}
      style={{ width: 75, height: 75, top: -16 }}
    />
  )
}