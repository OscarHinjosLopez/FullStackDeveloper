import { Link } from "react-router-dom"

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
    return (
        <div className=" col-12  mx-3 my-2 animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters ">
                    <div className="col-4">
                        <img src={`./assets/heroes/${id}.jpg`} className="card-img" alt={superhero}/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {alter_ego != characters ? <p>{characters}</p> : ''}
                            <p className="card-text"><small>{first_appearance}</small></p>
                        </div>
                        <Link to={`/hero/${id}`}> Mas...</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
