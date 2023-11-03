import skills from './data/skill.json'

export default function Skill(){
    return (
        <div className="row">
             {skills.map((skill,index) => (
                <div key={index} className="col-12">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">{skill.title}</h3>
                            <div className="progress">
                                <div className="progress-bar" style={{ width: `${skill.level}%` }}>{skill.level}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}