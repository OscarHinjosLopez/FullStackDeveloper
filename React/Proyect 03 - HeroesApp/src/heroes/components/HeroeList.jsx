import { useMemo } from "react";
import { getHeroesByPublisher } from "../helpers/Index"
import { HeroCard } from "./Index";


export const HeroeList = ({ publisher }) => {

    const heroes =  useMemo(() => getHeroesByPublisher(publisher),[publisher]) 

    return (
        <div className="row d-flex justify-content-center">
            {
                heroes.map(hero => (
                    <HeroCard  key={hero.id} 
                    {...hero}
                    />
                ))
            }
        </div>
    )
}
