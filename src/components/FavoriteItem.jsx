import { motion } from 'framer-motion'

const FavoriteItem = ({ fav, onRemove }) => {
    return (
        <motion.div
            key={fav.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-400/20 h-auto rounded-lg p-3 flex flex-col 
            sm:flex-row items-start sm:items-center justify-between gap-3 shadow-lg 
            box-border"
        >
            {/* image */}
            <div className="w-full sm:w-16 h-28 sm:h-24 rounded-md overflow-hidden">
                <img
                    src={fav.image}
                    alt={fav.name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* data */}
            <div className="flex flex-col text-left gap-0.5 sm:ml-3 flex-grow text-sm w-full sm:w-auto">
                <span className="font-semibold break-words">{fav.name}</span>
                <span className="text-black/60">Location: {fav.location}</span>
                <span className="text-black/60">Origin: {fav.origin}</span>
                <span className="text-black/60">Status: {fav.status}</span>
                <span className="text-black/60">Gender: {fav.gender}</span>
            </div>

            {/* delete button */}
            <div className="self-end sm:self-center">
                <button
                    onClick={() => onRemove(fav.id)}
                    className="text-red-500 hover:text-red-600 transition"
                    title="Remove from favorites"
                    aria-label="Remove from favorites"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5-4h4m-4 0a1 1 0 00-1 1v1h6V4a1 1 0 00-1-1m-4 0h4" />
                    </svg>
                </button>
            </div>
        </motion.div>
    )
}


export default FavoriteItem