import react, {createContext, useContext, useState} from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

const ResultContextProvider = ({children}) => {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResult = async(type) => {
        setLoading(true);
        const response = await fetch(`${baseUrl}${type}`, {
            method: "GET",
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'EU',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': '7e0e0a1283mshf5f518275e3a95cp1f1dc3jsn10c26fcd9e8a'
            }
        });
        const data = await response.json();
        setResult(data);
        setLoading(false);
    }

    return (
        <ResultContext.Provider value={{result, getResult, searchTerm, setSearchTerm, loading}}>
            {children}
        </ResultContext.Provider>
    )
}

export default ResultContextProvider;
export const useResult = () => useContext(ResultContext);