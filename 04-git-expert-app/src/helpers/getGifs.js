
export const getGifts =  async( category) => {
        
        const url = `https://api.giphy.com/v1/gifs/search?api_key=qDD4kPr1TMkHtmnMGo4BiaBD4An9KHOi&q=${category}&limit=20`;
        const resp = await fetch( url );
        const { data } = await resp.json();

        const gifs = data.map( img => ({
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        ));

        console.log(gifs);
        return gifs;
    }
