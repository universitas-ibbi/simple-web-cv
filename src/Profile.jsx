import profile from './data/profile.json'

export default function Profile(){
    return (
        <>
            <img src={profile.image} style={{ width: "50%" }} />
            <h2>{profile.name}</h2>
            <p>{profile.job_title}</p>
            <p>{profile.description}</p>
        </>
    )
}