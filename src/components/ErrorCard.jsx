const ErrorCard = ({ message, setError }) => {

    return (
        <>
            <div className='relative bg-gradient-to-b from-[#00A63E] to-[#00C950] w-full flex flex-col justify-center items-center min-h-[50vh] rounded-xl mb-10'>
                <div className='w-auto px-3 py-2 bg-white rounded-full text-gray-600 mb-4'>Message</div>

                <p className='text-white text-center font-semibold text-2xl w-[70%] sm:w-[60%] md:w-[50%] lg:w-[30%]'>
                    {message}
                </p>

                <button
                    onClick={() => setError(null)}
                    className='absolute top-6 right-6 cursor-pointer text-white font-semibold text-lg'>close</button>
            </div>
        </>
    )
}

export default ErrorCard