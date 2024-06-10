import {useEffect, useState} from "react";

// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
// export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=7f556eb6`

const useFetch = (urlParams) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const API_KEY = process.env.REACT_APP_API_ENDPOINT;
     // const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_ENDPOIN}`

    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState({show: false, msg: ''})
    const [data, setData] = useState(null)

    const fetchMovies = async (url) => {
        setIsLoading(true)
        try {
            const response = await fetch(url)
            const data = await response.json()
            if (data.Response === 'True') {
                setData(data.Search || data)
                setError({show: false, msg: ''})
            } else {
                setError({show: true, msg: data.Error})
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }

    }
    useEffect(() => {
        fetchMovies(`${BASE_URL}/?apikey=${API_KEY}${urlParams}`)
    }, [urlParams])

    return { data, error, isLoading}
}
export default useFetch
