
import CustomHeader from './shared/components/CustomHeader';
import SearchBar from './shared/components/SearchBar';
import PreviousSearches from './gifs/components/PreviousSearches';
import GifList from './gifs/components/GifList';
import { useGifs } from './gifs/hooks/useGifs';

const GifsApp = () => {

    const { gifs, handleTermClicked, handleSearch, previousTerms, } = useGifs();

    return (
        <>
            {/* Header */}
            <CustomHeader 
            title='Buscador de Gifs' 
            description='Descubre y comparte el gif completo' />

            {/* Search */}
            <SearchBar 
                placeholder='Busca lo que quieras' 
                onQuery={handleSearch}
            />

            {/* Búsquedas previas */}
            <PreviousSearches 
                searches={previousTerms}
                onLabelClicked={handleTermClicked}/>
            

            {/* Gifs */}
            <GifList gifs={gifs}/>
        </>
    )
}

export default GifsApp
