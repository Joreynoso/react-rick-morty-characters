// --> import custom hook
import { useCharacter } from '../context/CharacterContext'

export default function Navbar() {
    // use context
    const { toggleShown } = useCharacter()

    return (
        
        <nav className="w-full">
            <div className="mx-auto flex items-center justify-between">

                {/* Logo */}
                <h1 className="text-xl font-semibold tracking-wide text-white">Rick & Morty API</h1>

                {/* Botón de Favoritos estilo wireframe */}
                <div className='w-auto bg-white rounded-full flex justify-center items-center p-1'>
                    <span className='text-gray-600 font-semibold ml-1 mr-2 uppercase'>favorites</span>

                    <button
                        onClick={toggleShown}
                        type="button"
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500 shadow-md hover:bg-green-600 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400"
                        title="Ver favoritos"
                    >

                        {/* Ícono - wireframe, sin color definido */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6 text-white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.562.562 0 00.475.346l5.518.442a.562.562 0 01.32.98l-4.204 3.762a.562.562 0 00-.181.527l1.285 5.365a.562.562 0 01-.84.61l-4.72-2.855a.562.562 0 00-.586 0l-4.72 2.855a.562.562 0 01-.84-.61l1.285-5.365a.562.562 0 00-.181-.527L2.042 10.38a.562.562 0 01.32-.98l5.518-.442a.562.562 0 00.475-.346l2.125-5.111z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav >
    )
}
