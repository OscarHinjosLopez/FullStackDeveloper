

export const GifGridItem = ({ id, title, urlImg }) => {

    
    return (
        <div className="card">
            <img title={title} alt={title} src={urlImg}></img>
            <p>{title}</p>
        </div>
    )
}
