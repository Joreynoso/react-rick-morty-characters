// --> import axios
import axios from 'axios'

// --> settings
const baseurl = import.meta.env.VITE_BASE_URL

// --> fetch Characters
export const fetchCharacters = async (name, limit) => {
    try {
        const url = `${baseurl}?name=${name}`
        const response = await axios.get(url)

        console.log('-->[FETCH URL]', url)
        console.log('-->[FETCH SUCCESS]')

        // limit results, if exist any results
        const limitedResults = response.data.results
            ? response.data.results.slice(0, limit)
            : []

        return {
            ...response.data,
            results: limitedResults
        }
    } catch (error) {
        console.error('-->[FETCH ERROR]', error)
        return null
    }
}


