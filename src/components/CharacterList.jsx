// --> import components 
import CharacterCard from "./CharacterCard"

// --> impor custom hook
import { useCharacter } from "../context/CharacterContext"

// --> import framer moton
import { motion } from 'framer-motion'

const CharacterList = () => {

    // use character
    const { favorites, characterData, addToFavorites } = useCharacter() // --> object from context

    // get result array
    const characters = characterData?.results || []

    // map CharacterCard component
    const charactersMap = characters.map((char, index) => {
        const {
            id,
            name,
            status,
            species,
            gender,
            image,
            location: { name: locationName },
            origin: { name: originName }
        } = char

        // check if is in favorites
        const isInFavorites = favorites.some(fav => fav.id === id)

        return (
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: index * 0.1 }}
                key={id}>

                <CharacterCard
                    name={name}
                    status={status}
                    gender={gender}
                    species={species}
                    location={locationName}
                    origin={originName}
                    isInFavorites={isInFavorites}
                    image={image}

                    // --> create and object to pass to context
                    handleClick={() => addToFavorites({
                        id,
                        name,
                        status,
                        species,
                        gender,
                        image,
                        location: locationName,
                        origin: originName,
                    })}
                />
            </motion.div>
        )
    })

    return (
        <>
            {/* characterList containerF */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-10">
                {charactersMap}
            </div>
        </>
    )
}

export default CharacterList
