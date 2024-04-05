import React from 'react'
import {useGlobalContext} from './context'

const SearchForm = () => {
    const {query, setQuery, error} = useGlobalContext()
    return (
        <form onSubmit={e => e.preventDefault()} className="search-form">
            <h2>Search movies</h2>
            <input type="text" value={query} className="form-input" onChange={e => setQuery(e.target.value)}/>
            {error.show && <div className="error">{error.msg}</div>}
        </form>
    )
}

export default SearchForm
