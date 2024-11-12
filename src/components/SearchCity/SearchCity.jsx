import {useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import InputWithSugestions from '../Form/InputWithSugestions/InputWithSugestions';

const SearchCity = () => {
    const [searchText, setSearchText] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const router = useRouter();
    
    const fetchCitiesList = async () => {
        const cities_limit = 5      
                 
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${searchText}&limit=${cities_limit}&appid=${process.env.NEXT_PUBLIC_OWM_KEY}`)
        const json = await response.json()
        console.log(json)
        handleList(json)
    }

    const handleList = (List) => {
        const formatedList = List.map((obj) => ({
                text: `${obj.name}/${obj.state}, ${obj.country} `,
                onclick: () => router.push(`info/${obj.lat}/${obj.lon}`)
            }))            
        setSuggestions(formatedList)
    }

    useEffect(() => {
        if(searchText.length >= 3) fetchCitiesList()
        else setSuggestions([])
    }, [searchText])
    
    return (
        <InputWithSugestions 
            placeholder='Digite a sua cidade'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            suggestions={suggestions}
        />
    );
}

export default SearchCity;
