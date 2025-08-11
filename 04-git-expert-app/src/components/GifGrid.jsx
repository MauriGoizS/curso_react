import { getGifts } from "../helpers/getGifs";

const GifGrid = ({ category }) => {
    
    getGifts( category );

    return (
        <>
            <h3> { category } </h3>  
            
        </>
    )
}

export default GifGrid
