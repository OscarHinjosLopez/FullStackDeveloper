export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=P8d7p9yWJ2AXdTMn7jAplb465JcXC55U&q=${category}&limit=10`
    const resp = await fetch(url)
    const {data} = await resp.json()    
   
    const gifs = data.map( img => (
        {
            id:img.id,
            title:img.title,
            urlImg:img.images.downsized_medium.url
        }
    ))
    
    return gifs
}