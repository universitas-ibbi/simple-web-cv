import profile from './data/profile.json'

export default function Profile(){
    return (
        <div className="row">
            <div className="col-md-4">
                <img className="w-100 rounded" src={profile.image} />
            </div>
            <div className="col-md-8">
                <h2>{profile.name}</h2>
                <p>{profile.job_title}</p>
                <p>{profile.description}</p>
            </div>
        </div>
    )
}