import { mockGifs } from './mock-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader';
import SearchBar from './shared/components/SearchBar';
import PreviousSearches from './gifs/components/PreviousSearches';
import GifList from './gifs/components/GifList';
import { useState } from 'react';

const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);

    const handleTermClicked = ( term: string ) => {
        console.log({term})
    }

    return (
        <>
            {/* Header */}
            <CustomHeader 
            title='Buscador de Gifs' 
            description='Descubre y comparte el gif completo' />

            {/* Search */}
            <SearchBar placeholder='Busca lo que quieras' />

            {/* Búsquedas previas */}
            <PreviousSearches 
                searches={previousTerms}
                onLabelClicked={handleTermClicked}/>
            

            {/* Gifs */}
            <GifList gifs={mockGifs}/>
        </>
    )
}

export default GifsApp
