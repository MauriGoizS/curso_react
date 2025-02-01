const getImage = async () => {
    try {
        const apiKey = "qDD4kPr1TMkHtmnMGo4BiaBD4An9KHOi";
        const resp = await fetch(
            `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
        );
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Maneo del error
        console.error(error)
    }
};

getImage();
