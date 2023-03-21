import React, { createContext, useContext,useState} from "react";

const ResultContext = createContext();
const baseUrl = "'https://google-search83.p.rapidapi.com/google"

export const ResultContextProvider = ({children}) =>{
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) =>{
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers:{
                'X-RapidAPI-Key': '26237f3381mshc704cdfcf48cb04p152bfdjsn622b6664c0cd',
                'X-RapidAPI-Host': 'google-search83.p.rapidapi.com'
            }
        })
        const data = await response.json();
       
        setResults(data);
        setIsLoading(false)
    }
        return (
            <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm,isLoading}}>
                    {children}
            </ResultContext.Provider>
        );
    
}

export const useResultContext = () => useContext(ResultContext);