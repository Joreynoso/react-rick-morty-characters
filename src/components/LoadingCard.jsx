const LoadingCard = () => {
    return (
        <>
            <div className="bg-gradient-to-b from-[#00A63E] to-[#00C950] w-full flex flex-col justify-center items-center min-h-[50vh] rounded-xl mb-10">
                <div className="w-10 h-10 border-4 border-t-transparent border-white rounded-full animate-spin mb-4"></div>
                <p className='text-white text-xl sm:text-2xl font-semibold'>Searching..</p>
            </div>
        </>
    )
}

export default LoadingCard