// --> imports
import { useState, useRef, useEffect } from "react"
import { useCharacter } from "../context/CharacterContext"


const SearchForm = () => {

    // state to filter name and limit of search
    const [filters, setFilters] = useState({
        name: '',
        limit: 10
    })

    // usse custom hook
    const { setError, findCharacters, setCharacterData, favorites } = useCharacter()

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()

        if (filters.name.trim() === "") {
            console.log("-->[SEARCHFORM ERROR] Empty name field")
            setError("Beep boop... need input! Type a name to search")
            setCharacterData([])
            return null
        }

        if (filters.limit < 1) {
            console.log("-->[SEARCHFORM ERROR] Invalid limit")
            setError("Morty, that's not a valid number of results. Try a number greater than 0!")
            setCharacterData([])
            return null
        }

        console.log("-->[SEARCHFORM] filters", filters)
        findCharacters(filters.name, filters.limit)
    }

    return (
        <div className="p-6 flex flex-col items-center justify-center gap-4 w-full max-w-md mx-auto ">
            <div className='text-white text-center'>
                <p className="text-center font-semibold text-2xl sm:text-3xl leading-8">
                    ¡Type a character<br />
                    name to start!
                </p>

                <span className='text-sm leading-tight'>(set a number limit before)</span>
            </div>

            <form onSubmit={handleSubmit} className="w-full">
                <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full w-full">

                    {/* input name for search */}
                    <input
                        type="text"
                        placeholder="E.g. Rick Sanchez"
                        value={filters.name}
                        onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                        className="bg-transparent outline-none flex-grow text-sm text-gray-700 placeholder-gray-400"
                    />

                    {/* input number, limit */}
                    <input
                        type="number"
                        value={filters.limit}
                        min="1"
                        max="20"
                        onChange={(e) => setFilters({ ...filters, limit: Number(e.target.value) })}
                        className="w-12 px-2 py-1 rounded-md border border-gray-300 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />

                    {/* submit button */}
                    <button
                        type="submit"
                        className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                        aria-label="Searching for a character"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="white"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm
