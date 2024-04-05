import React, {useState, useContext, useEffect} from 'react'
import useFetch from "./useFetch";
// make sure to use https
// REACT_APP_MOVIE_API_KEY=7f556eb6
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const [query, setQuery] = useState('batman')
    const {isLoading, error, data:movies} =  useFetch(`&s=${query}`)


    return <AppContext.Provider value={{movies, query, setQuery, isLoading, error}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
