import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs"



export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoagind] = useState(true)

    const getImg = async () => {
        const imgArr = await getGifs(category)
        setImages(imgArr)
        setIsLoagind(false)
    }

    useEffect(() => {
        getImg()
    }, [])

    return{
        images:images,
        isLoadin: isLoading,
    }
}
