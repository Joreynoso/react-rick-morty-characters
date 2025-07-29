
const CharacterCard = ({ name, image, isInFavorites, handleClick }) => {

    // icon switch toggle
    const iconSwitch = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
    )

    return (

        <div className="w-full max-w-xs h-80 rounded-lg overflow-hidden bg-gradient-to-b from-[#00A63E] to-[#00C950] shadow-sm flex flex-col items-center justify-between px-4 py-6 text-black">

            {/* iamge elipse */}
            <div className="w-34 h-34 rounded-full overflow-hidden border-4 border-white">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* name and call to action button */}
            <div className="w-full flex flex-col items-center gap-1 mt-auto mb-2">
                <h2 className="text-base font-semibold text-center text-white">{name}</h2>

                <button
                    disabled={isInFavorites}
                    onClick={handleClick}
                    type="button"
                    className="mt-1 py-1.5 px-4 text-sm font-medium rounded-full bg-green-400 text-white 
                    cursor-pointer disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed
                    transform transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-600"
                >
                    {isInFavorites ? 'already in favorites' : 'add to favorites'}
                </button>
            </div>
        </div>

    )
}

export default CharacterCard

