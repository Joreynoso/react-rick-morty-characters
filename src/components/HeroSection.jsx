// --> imports
import Navbar from "./Navbar"
import SearchForm from './SearchForm'

// --> import motion
import { motion, AnimatePresence } from 'framer-motion'

const HeroSection = () => {
    return (
        <div
            className="w-full flex flex-col gap-4 mb-4">
            {/* hero image */}
            <motion.section
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}

                className="h-[55vh] bg-gray-300 rounded-xl flex flex-col justify-between p-6 bg-[left_center] sm:bg-[center_30%] bg-cover box-border"
                style={{ backgroundImage: `url("/img/bg-1.jpg")` }}
            >

                <Navbar />

                {<h1 className="text-white font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-2xl tracking-tight">
                    Discover <br />
                    Rick & Morty <br />
                    Characters
                </h1>}
            </motion.section>

            {/* 3 grid section */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}

                    className="w-full rounded-xl aspect-square md:aspect-[1/1] md:h-[40vh] p-6 flex flex-col justify-between bg-center bg-cover box-border"
                    style={{ backgroundImage: `url("/img/bg-2.jpg")` }}
                >
                    <span className="text-white font-semibold text-4xl md:text-5xl tracking-tight">800+</span>

                    <h2 className="text-white font-semibold text-2xl md:text-3xl leading-snug tracking-tight">
                        More than <br />
                        800 characters <br />
                        to explore
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}

                    className="w-full rounded-xl aspect-square md:aspect-[1/1] md:h-[40vh] flex flex-col justify-end p-6 bg-center bg-cover box-border
                    "
                    style={{ backgroundImage: `url("/img/bg-3.jpg")` }}
                >
                    <h3 className="text-white font-semibold text-2xl md:text-3xl leading-snug tracking-tight">
                        Find characters <br />
                        and add them to <br />
                        your favorites.
                    </h3>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="h-full w-full rounded-xl aspect-square md:aspect-[1/1] md:h-[40vh] flex justify-center items-center bg-gradient-to-b from-[#00A63E] to-[#00C950]">
                    <SearchForm />
                </motion.div>
            </section>
        </div>
    )
}

export default HeroSection
