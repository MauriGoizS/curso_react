import { mockGifs } from './mock-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader';
import SearchBar from './shared/components/SearchBar';
import PreviousSearches from './gifs/components/PreviousSearches';
import GifList from './gifs/components/GifList';

const GifsApp = () => {
    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de Gifs' description='Descubre y comparte el gif completo' />

            {/* Search */}
            <SearchBar placeholder='Busca lo que quieras' />

            {/* Búsquedas previas */}
            <PreviousSearches searches={['Goku', 'Batman', 'Superman']}/>
            

            {/* Gifs */}
            <GifList gifs={mockGifs}/>
        </>
    )
}

export default GifsApp
