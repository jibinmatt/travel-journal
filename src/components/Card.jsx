
import locationPin from "../images/locationPin.svg"

export default function Card(props) {
    return(
        <>
          <div className="card">
            <img src={props.experience.imageUrl} alt={props.experience.title} className="card--img"/>
            <aside className="card--info">
                <span className="card--head">
                    <img src={locationPin} alt="location pin logo" className="card--pinlogo" /> 
                    <span className="card--loc">{props.experience.location}</span>
                    <span className="card--link"><a href={props.experience.googleMapsUrl} target="_blank" >View on Google Maps</a></span>
                </span>
                <h1 className="card--title">{props.experience.title}</h1>
                <p className="card--dates">{props.experience.startDate} - {props.experience.endDate} </p>
                <description className="card--desc">{props.experience.description}</description>
            </aside>
          </div>
          <hr className="divider" />
        </>
        
    )
}