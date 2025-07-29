// --> import custom hook
import { useCharacter } from '../context/CharacterContext'
import CharacterList from './CharacterList'
import ErrorCard from './ErrorCard'
import LoadingCard from './LoadingCard'

const DisplayController = () => {

    // use custom hook
    const { error, setError, loading, characterData, displayRef } = useCharacter()

    return (
        <div ref={displayRef} className='w-full'> 
            {loading && <LoadingCard />}
            {error && <ErrorCard message={error} setError={setError} />}
            {characterData && <CharacterList />}
        </div>
    )
}

export default DisplayController