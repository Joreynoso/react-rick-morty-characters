// --> imports
import { createContext, useContext, useState, useRef, useEffect } from "react"
import { fetchCharacters } from "../service/fetchCharacters"

// --> create context
export const CharacterContext = createContext(null)

// --> context provider
export const CharacterProvider = ({ children }) => {

    // --> character states
    const [characterData, setCharacterData] = useState([null])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // --> menu fav states
    const [isOpen, setIsOpen] = useState(false)
    const [favorites, setFavorite] = useState(() => {
        const favorites = localStorage.getItem('favorites')
        return favorites ? JSON.parse(favorites) : []
    })

    // --> useRef to put focus on displayController
    const [hasScrolled, setHasScrolled] = useState()
    const displayRef = useRef(null)

    // --> methods for favorites
    const toggleShown = () => {
        console.log('-->[CONTEXT FAV] toggleShown Favorite list')
        setIsOpen(prev => !prev)
    }

    const addToFavorites = (character) => {
        setFavorite(prevFav => {
            const exist = prevFav.find(fav => fav.id === character.id)

            if (exist) {
                console.log('-->[CONTEXT FAV] already in fav')
                return prevFav
            } else {
                console.log('-->[CONTEXT FAV] added to favorites', character.name)
                return [...prevFav, { ...character }]
            }
        })
    }

    const removeFromFavorites = (id) => {
        console.log('-->[CONTEXT FAV] remove from favorites')
        setFavorite(prevFav => {
            const exist = prevFav.find(fav => fav.id === id)

            if (exist) {
                return prevFav.filter(fav => fav.id !== id)
            }

            return prevFav
        })
    }

    const removeAllFavorites = () => {
        console.log('-->[CONTEXT FAV] clear all favorites')
        setFavorite([])
    }

    // --> methods for fetch
    const findCharacters = async (name, limit) => {
        console.log('-->[CONTEXT API] waiting response...')
        setCharacterData([])
        setLoading(true)
        setError(null)

        try {
            const response = await fetchCharacters(name, limit)

            // check if exist any data
            if (!response || response.results.length === 0) {
                console.log('--> [CONTEXT ERROR] character not found')
                setError("Morty, I think you typed it wrong. That character doesn't exist in this dimension.")
                setCharacterData([])
            } else {
                setCharacterData(response)
            }

        } catch (error) {
            console.log('--> [CONTEXT ERROR] failed to get response')
            setError(error.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }

    // change scroll view to displayController
    useEffect(() => {
        if (!hasScrolled && displayRef.current) {
            // do not scroll first time
            setHasScrolled(true)
        }
        if (hasScrolled && displayRef.current) {
            displayRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [loading, error, characterData])

    // favorites localStorage
    // --> save cart to localStorage
    useEffect(() => {
        console.log('-->[LOCAL STORAGE] favorites running...')
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    return (
        <CharacterContext.Provider value={{
            characterData,
            setCharacterData,
            loading,
            error,
            setError,
            findCharacters,

            favorites,
            setFavorite,
            addToFavorites,
            removeFromFavorites,
            removeAllFavorites,

            isOpen,
            setIsOpen,
            toggleShown,

            displayRef,
        }}>
            {children}
        </CharacterContext.Provider>
    )
}

// --> custom hook to use context
export const useCharacter = () => useContext(CharacterContext)
