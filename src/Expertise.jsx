import expertises from './data/expertise.json'

export default function Expertise(){
    return (
        <>
            {expertises.map((expertise,index) => (
                <div key={index}>
                    <h1>{expertise.title}</h1>
                    <p>{expertise.description}</p>
                </div>
            ))}
        </>
    )
}