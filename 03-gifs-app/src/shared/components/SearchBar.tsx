
interface Prop {
    placeholder?: string;
}

const SearchBar = (  { placeholder = 'Buscar' }: Prop ) => {
    return (
        <div className="search-container">
            <input type="text" placeholder={ placeholder } />
            <button> Buscar </button>
        </div>
    )
}

export default SearchBar
