// --> import custom hook
import { useCharacter } from '../context/CharacterContext'

// --> import component
import FavoriteItem from './FavoriteItem'

// --> import framer moton
import { motion, AnimatePresence } from 'framer-motion'

const FavoriteList = () => {

    // use custom hook
    const { isOpen, toggleShown, favorites, removeFromFavorites, removeAllFavorites } = useCharacter()

    return (
        <AnimatePresence>
            {isOpen && (<motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="scrollbar-green fixed top-0 right-0 w-full sm:w-2/4 xl:w-1/3 h-screen z-50 bg-white flex flex-col text-center px-4 py-6 shadow-lg">
                {/* header */}
                <div className="w-full flex justify-between items-center mb-4">
                    <h2 className="text-sm font-semibold">
                        {favorites.length === 0 ? "Add your first favorite" : "Favorite List"}
                    </h2>

                    <div className='flex gap-2'>
                        {favorites.length > 0 && (
                            <button
                                onClick={removeAllFavorites}
                                className="text-sm px-3 py-1 rounded bg-green-500 hover:bg-green-600 transition text-white"
                            >
                                Remove all
                            </button>
                        )}

                        <button
                            onClick={toggleShown}
                            className="text-sm px-3 py-1 rounded bg-green-500 hover:bg-green-600 transition text-white"
                        >
                            Close
                        </button>
                    </div>
                </div>

                {/* scroll content */}
                <div className="flex-1 w-full overflow-y-auto space-y-4 pr-1">
                    <AnimatePresence>
                        {favorites.map(fav => (
                            <FavoriteItem key={fav.id} fav={fav} onRemove={removeFromFavorites} />
                        ))}
                    </AnimatePresence>
                </div>
            </motion.div>)}
        </AnimatePresence>
    )
}

export default FavoriteList
