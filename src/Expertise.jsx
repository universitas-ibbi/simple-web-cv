import expertises from './data/expertise.json'

export default function Expertise(){
    return (
        <div className="row">
            {expertises.map((expertise,index) => (
                <div key={index} className="col-md-6">
                    <h2>{expertise.title}</h2>
                    <p>{expertise.description}</p>
                </div>
            ))}
        </div>
    )
}