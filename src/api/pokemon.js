// Fichero que contiene las funciones que se comunican con el servidor de pokeAPI 

import { API_HOST } from '../utils/constansts'

export const getPokemonsApi = async (nextUrl) => {
    try {
        const url = `${API_HOST}/pokemon?limit=20&offset=0`;

        const response = await fetch(nextUrl || url) // con esto decimos que si existe nextUrl haga la petición allí, de lo contrario que haga la petición a la url que definimos primero 
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export const getPokemonInfo = async (url) => {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export const getPokemonDetails = async (id) => {
    try {
        const url = `${API_HOST}/pokemon/${id}`
        const response = await fetch(url)
        const result = response.json()

        return result
    } catch (error) {
        throw error
    }
}