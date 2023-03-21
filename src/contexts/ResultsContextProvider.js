import React, {Children, createContext, useContext,useState} from "react";

const ResultContext = createContext();
const baseUrl = "'https://google-search83.p.rapidapi.com/google"

export const ResultContextProvider = ({}) =>{
    const [results, setResults] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [searchItem, setSearchItem] = useState('');

    const getResults = async () =>{
        isLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers:{
                'X-RapidAPI-Key': '26237f3381mshc704cdfcf48cb04p152bfdjsn622b6664c0cd',
                'X-RapidAPI-Host': 'google-search83.p.rapidapi.com'
            }
        })

        const data = await response.json();

        setResults(data);
        setIsloading(false)

        return (
            <ResultContext.Provider value={{getResults, results, SearchItem, isLoading}}>
                    {Children}
            </ResultContext.Provider>
        );
    }
}

export const useResultContext = () => useContext(ResultContext);