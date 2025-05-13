export const getImage = async () => {
    try {
        const apiKey = "qDD4kPr1TMkHtmnMGo4BiaBD4An9KHOi";
        const resp = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();
        const { url } = data.images.original;

        return url;

    } catch (error) {
        // Maneo del error
        console.error(error)
        return 'No se encontro la imagen';
    }
};

getImage();
