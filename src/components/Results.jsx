import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {Loading} from './Loading';
import { useResultContext } from '../contexts/ResultsContextProvider';

export const Results = () => {
    const {Results, isLoading, getResults, searchItem} = useResultContext();
    const location = useLocation();

    useEffect(()=>{
        getResults('/search/q=Javascript Mastery&num=40')
    })

    if (isLoading) return <Loading />;

    console.log(location.pathname)
    switch (location.pathname){
        case '/search':
            return(
                <div className='flex flex-wrap justify-between space-y-6 sm px:56'>
                    {
                        Results?.results?.map(({link, title}, index) =>(
                            <div key={index} className="md:w-2/5 w-full"> 
                                    <a href={link} target="_blank" rel="noreferrer">
                                        <p className='text-sm'>
                                            {link.length > 30 ? link.substring(0,30): link}
                                        </p>
                                        <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                                                {title}
                                        </p>
                                    </a>
                            </div>
                        ))
                    }

                </div>
            );
        case '/images':
            return 'SEARCH';    
        default:
            return 'ERROR'
    }
}



