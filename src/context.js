import React, {useState, useContext} from 'react'
import useFetch from "./useFetch";
// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=7f556eb6`

const AppContext = React.createContext()

const AppProvider = ({children}) => {

    const [query, setQuery] = useState('batman')
    const {isLoading, error, data:movies} =  useFetch(`&s=${query}`)


    return <AppContext.Provider value={{movies, query, setQuery, isLoading, error}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}
