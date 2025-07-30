// --> import custom hook
import { useCharacter } from "../context/CharacterContext"

const LoadingProgress = () => {

    // use hook
    const { favorites } = useCharacter()

    if (favorites.length !== 0) return null

    return (
        <div className="w-full h-screen bg-gradient-to-b from-[#00A63E] to-[#00C950] flex justify-center items-center">
            <h1 className="text-white text-6xl">100<span>%</span></h1>
        </div>
    )
}

export default LoadingProgress