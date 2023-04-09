
import { useEffect, useState } from "react";
import { getGifts } from "../helpers/getGifs";
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getImages = async (category) => {
        const img = await getGifts(category);
        setImages(img);
        setIsLoading(false);
    }
    useEffect(() => {
        getImages(category);

    }, []);
    return {
        images,
        isLoading
    }
}