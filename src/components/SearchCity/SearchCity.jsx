import {useState } from 'react';
import InputWithSugestions from '../Form/InputWithSugestions/InputWithSugestions';

const SearchCity = () => {
    const [searchText, setSearchText] = useState('');

    console.log(search)
    return (
        <InputWithSugestions 
            placeholder='Digite a sua cidade'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
        />
    );
}

export default SearchCity;
