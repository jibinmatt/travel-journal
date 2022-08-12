
import data from "../data"
import Card from "./Card"

export default function Experiences() {

    const card = data.map((experience) => {
        return(
            <Card
                key={experience.id}
                experience={experience}
            />
        )
    })
    
    return (
        <>
            <section className="experiences--list"> 
                {card}
            </section>
        </>
    )
}