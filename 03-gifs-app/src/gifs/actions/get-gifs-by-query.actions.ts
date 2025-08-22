import axios from "axios";
import type { GiphyResponse } from "../interfaces/giphy.response";
import type { Gif } from "../interfaces/gif.interface";

export const getGifsByQuery = async (  query: string): Promise<Gif[]> => {

    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: query,
            limit:10 ,
            lang: 'es',
            api_key: 'qDD4kPr1TMkHtmnMGo4BiaBD4An9KHOi'
        }
    });

    console.log(response.data);

    return response.data.data.map(( gif ) => ({
        id:  gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));
};